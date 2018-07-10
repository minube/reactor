import { func, shape, string } from 'prop-types';
import React, { createElement, PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import Input from '../Input';
import InputPicker from '../InputPicker';
import Text from '../Text';
import Switch from '../Switch';
import set from './modules/set';
import styles from './Form.style';

const Inputs = {
  bool: Switch,
  select: InputPicker,
};

class Form extends PureComponent {
  static propTypes = {
    attributes: shape({}).isRequired,
    data: shape({}),
    onChange: func,
    onValid: func,
    title: string,
  };

  static defaultProps = {
    data: undefined,
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

  _onChange = ({ value, keyMap }) => {
    const { props: { data, onChange } } = this;

    if (onChange) onChange(set(data, keyMap, value));
  }

  renderForm = ({
    attributes = {}, data = {}, fieldset = false, title, key,
  }) => {
    const { renderField, renderForm } = this;

    return (
      <View key={key} style={[styles.container, fieldset && styles.fieldset]}>
        { title && (
        <Text primary bold style={[styles.title, styles.anchor]}>
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
                data: data[field],
                fieldset: true,
                title: props.title,
                key: keyMap,
              })
              : renderField({
                field, props, value: data[field], keyMap,
              });
          })
        }
      </View>
    );
  }

  renderField = ({
    field, props: { style, type, ...props } = {}, value = props.defaultValue, keyMap,
  }) => {
    const { _onChange } = this;
    const isIncomplete = props.required && !value && !props.disabled;
    if (isIncomplete) this.state.valid = false;

    return createElement(Inputs[type] || Input, {
      key: keyMap,
      label: props.label || field,
      ...props,
      error: isIncomplete ? 'required' : props.error,
      value,
      style: styles[style] || styles.anchor,
      onChange: newValue => _onChange({ value: newValue, keyMap }),
    });
  }

  render() {
    const {
      renderForm,
      props: {
        attributes, data, title, ...inherit
      },
    } = this;

    return (
      <ScrollView style={inherit.style}>
        {renderForm({ attributes, data, title })}
      </ScrollView>
    );
  }
}

export default Form;
