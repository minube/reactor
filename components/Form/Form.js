import { func, shape, string } from 'prop-types';
import React, { createElement, PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import Input from '../Input';
import InputImage from '../InputImage';
import InputList from '../InputList';
import InputPicker from '../InputPicker';
import Text from '../Text';
import Switch from '../Switch';
import set from './modules/set';
import styles from './Form.style';

const Inputs = {
  bool: Switch,
  image: InputImage,
  select: InputPicker,
  list: InputList,
};

class Form extends PureComponent {
  static propTypes = {
    attributes: shape({}),
    value: shape({}),
    onChange: func,
    onValid: func,
    title: string,
  };

  static defaultProps = {
    attributes: {},
    value: undefined,
    title: undefined,
    onChange: undefined,
    onValid() {},
  };

  state = {
    valid: true,
  };

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
    attributes = {}, value = {}, fieldset = false, title, key,
  }) => {
    const { renderField, renderForm } = this;

    return (
      <View key={key} style={[styles.container, fieldset && styles.fieldset]}>
        { title && (
        <Text subtitle level={2} style={[styles.title, styles.anchor]}>
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
                value: value[field],
                fieldset: true,
                title: props.title,
                key: keyMap,
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
    const { _onChange } = this;
    const invalid = (required && !props.disabled) && ((!type && value && value.trim().length === 0) || !value);
    if (invalid) this.state.valid = false;

    return createElement(Inputs[type] || Input, {
      key: keyMap,
      label: props.label || field,
      ...props,
      error: invalid ? 'required' : props.error,
      value,
      style: styles[style] || styles.anchor,
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
