import { func, shape, string } from 'prop-types';
import React, { createElement, PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import { LAYOUT } from '../../common';
import Input from '../Input';
import InputImage from '../InputImage';
import InputList from '../InputList';
import InputOption from '../InputOption';
import InputPicker from '../InputPicker';
import Text from '../Text';
import Switch from '../Switch';
import {
  consolidate, isValidEmail, isValidPhone, set,
} from './modules';
import styles from './Form.style';

const KEYBOARDS = {
  'email-address': isValidEmail,
  'phone-pad': isValidPhone,
};

const Inputs = {
  bool: Switch,
  image: InputImage,
  option: InputOption,
  select: InputPicker,
  list: InputList,
};

class Form extends PureComponent {
  static propTypes = {
    attributes: shape({}),
    color: string,
    value: shape({}),
    onChange: func,
    onValid: func,
    title: string,
  };

  static defaultProps = {
    attributes: {},
    color: undefined,
    value: undefined,
    title: undefined,
    onChange: undefined,
    onValid() {},
  };

  state = {
    valid: true,
  };

  componentWillMount() {
    consolidate(this.props);
  }

  componentWillReceiveProps(nextProps) {
    consolidate(nextProps);
  }

  componentWillUpdate() {
    this.state.valid = true;
  }

  componentDidUpdate() {
    const { props: { onValid }, state: { valid } } = this;
    onValid(valid);
  }

  _onChange = ({ keyValue, keyMap }) => {
    const { props: { value, onChange } } = this;

    if (onChange) onChange(set(value, keyMap, keyValue));
  }

  renderForm = ({
    attributes = {}, fieldset = false, key, style, title, value = {},
  }) => {
    const { renderField, renderForm } = this;
    const { VIEWPORT: { REGULAR, LARGE } } = LAYOUT;

    return (
      <View key={key} style={[styles.container, style, fieldset && styles.fieldset]}>
        { title && (
        <Text headline level={6} style={[styles.title, styles.anchor]}>
          {title}
        </Text>
        ) }
        {
          Object.keys(attributes).map((field) => {
            const props = attributes[field];
            const keyMap = key ? `${key}.${field}` : field;

            return props.attributes
              ? renderForm({
                attributes: props.attributes,
                fieldset: true,
                key: keyMap,
                style: REGULAR || LARGE ? styles[props.style] : undefined,
                title: props.title,
                value: value[field],
              })
              : renderField({
                field, props, value: value[field], keyMap,
              });
          })
        }
      </View>
    );
  }

  renderField = ({
    field, props: {
      required, style, type, ...props
    } = {}, value = props.defaultValue, keyMap,
  }) => {
    const { _onChange, props: { color } } = this;
    const { VIEWPORT: { REGULAR, LARGE } } = LAYOUT;
    let error = ' ';
    let invalid = (required && !props.disabled)
      && ((!type && value && value.trim().length === 0) || !value);

    if (Object.keys(KEYBOARDS).includes(props.keyboard)) {
      if (!KEYBOARDS[props.keyboard](value, props)) {
        error = 'error';
        invalid = true;
      }
    }
    if (invalid) this.state.valid = false;

    return createElement(Inputs[type] || Input, {
      key: keyMap,
      label: props.label || field,
      color,
      ...props,
      error: invalid ? error : props.error,
      value,
      style: (REGULAR || LARGE ? styles[style] : undefined) || styles.anchor,
      onChange: keyValue => _onChange({ keyValue, keyMap }),
    });
  }

  render() {
    const {
      renderForm,
      props: {
        attributes, value, title, ...inherit
      },
    } = this;

    return (
      <ScrollView style={inherit.style}>
        {renderForm({ attributes, value, title })}
      </ScrollView>
    );
  }
}

export default Form;
