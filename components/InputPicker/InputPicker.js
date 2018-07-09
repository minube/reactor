import {
  arrayOf, bool, func, string,
} from 'prop-types';
import React, { Component } from 'react';
import { Picker, View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputPicker.style';

const { COLOR } = THEME;

class InputPicker extends Component {
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

  state = {
    focus: false,
  };

  render() {
    const {
      props: {
        dataSource = [], disabled, error, hint, label, onChange, ...inherit
      },
      state: { focus },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        { label
          && (
          <Text tiny lighten style={styles.label}>
            {label}
          </Text>
          ) }
        <View
          style={[
            styles.input,
            !disabled && focus && styles.inputFocus,
            !disabled && error && styles.inputError,
            disabled && styles.inputDisabled,
          ]}
        >
          <Picker
            {...inherit}
            enabled={!disabled}
            mode="dropdown"
            onValueChange={onChange}
            onBlur={() => !disabled && this.setState({ focus: false })}
            onFocus={() => !disabled && this.setState({ focus: true })}
            selectedValue={inherit.value || undefined}
            style={[styles.picker, disabled && styles.pickerDisabled]}
          >
            { dataSource.map(item => <Picker.Item key={item} label={item} value={item} />)}
          </Picker>
        </View>
        { !disabled && (error || hint)
          && (
          <Text color={error ? COLOR.ERROR : undefined} tiny lighten style={styles.label}>
            {error || hint}
          </Text>
          ) }
      </View>
    );
  }
}

export default InputPicker;
