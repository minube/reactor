import {
  bool, func, shape, string,
} from 'prop-types';
import React, { createElement, PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import Input from '../Input';
import InputDate from '../InputDate';
import InputFilter from '../InputFilter';
import InputImage from '../InputImage';
import InputList from '../InputList';
import InputSearch from '../InputSearch';
import InputOption from '../InputOption';
import InputSelect from '../InputSelect';
import Text from '../Text';
import Switch from '../Switch';
import {
  buildStyle, consolidate, isValidEmail, isValidNumber, isValidPhone, isValidCustom, set,
} from './modules';
import styles from './Form.style';

const KEYBOARDS = {
  'email-address': isValidEmail,
  'phone-pad': isValidPhone,
  numeric: isValidNumber,
  custom: isValidCustom,
};

const KEYBOARDS_KEYS = Object.keys(KEYBOARDS);

const Inputs = {
  bool: Switch,
  date: InputDate,
  filter: InputFilter,
  image: InputImage,
  list: InputList,
  option: InputOption,
  select: InputSelect,
  searcher: InputSearch,
};

class Form extends PureComponent {
  static propTypes = {
    attributes: shape({}),
    color: string,
    value: shape({}),
    onChange: func,
    onClickItem: func,
    onValid: func,
    title: string,
    validate: bool,
  };

  static defaultProps = {
    attributes: {},
    color: undefined,
    value: undefined,
    title: undefined,
    onChange: undefined,
    onClickItem: undefined,
    onValid() {},
    validate: false,
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
    attributes = {}, fieldset = false, inline, key, style, title, value = {},
  }) => {
    const { renderField, renderForm } = this;

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
                style: buildStyle({ inline, style }, styles),
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
    field,
    props: {
      countryCode, defaultValue, inline, minChar, maxChar, validator, native, required, style, type, ...props
    } = {},
    value = defaultValue,
    keyMap,
  }) => {
    const { _onChange, props: { color, validate, onClickItem } } = this;
    let { error } = props;
    let invalid = required && !props.disabled && ((!type && value && value.trim().length === 0) || !value);
    let valid = false;
    if (KEYBOARDS_KEYS.includes(props.keyboard) && (!KEYBOARDS[props.keyboard](value, { countryCode, minChar, maxChar, validator }))) {
      error = 'error';
      invalid = true;
    }

    if (invalid) this.state.valid = false;
    else if (!error && !props.disabled && validate && value) valid = true;

    return createElement(Inputs[type] || Input, {
      key: keyMap,
      label: props.label || field,
      color,
      ...props,
      error,
      required: required && ((value === undefined || value === null) || (!type && value.trim().length === 0)),
      valid,
      value,
      onChange: keyValue => _onChange({ keyValue, keyMap }),
      onClickItem,
      style: buildStyle({ inline, style }, styles),
      native,
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
