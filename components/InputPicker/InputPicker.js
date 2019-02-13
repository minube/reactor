import {
  arrayOf, bool, func, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { Picker, View } from 'react-native';

import { InputHint, InputLabel } from '../Input';
import styles from './InputPicker.style';

class InputPicker extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(string),
    disabled: bool,
    error: string,
    hint: string,
    label: string,
    onChange: func,
  };

  static defaultProps = {
    dataSource: [],
    disabled: false,
    error: undefined,
    hint: undefined,
    label: undefined,
    onChange: undefined,
  };

  render() {
    const {
      props: {
        dataSource = [], disabled, error, hint, label, onChange, ...inherit
      },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        { label && (
          <InputLabel error={error}>
            {label}
          </InputLabel>)}
        <View
          style={[
            styles.input,
            !disabled && error && styles.inputError,
            disabled && styles.inputDisabled,
          ]}
        >
          <Picker
            mode="dropdown"
            {...inherit}
            enabled={!disabled}
            onValueChange={onChange}
            selectedValue={inherit.value}
            style={[styles.picker, disabled && styles.pickerDisabled]}
          >
            { dataSource.map(item => <Picker.Item key={item} label={item} value={item} />)}
          </Picker>
        </View>
        { hint && (
          <InputHint>
            {hint}
          </InputHint>)}
      </View>
    );
  }
}

export default InputPicker;
