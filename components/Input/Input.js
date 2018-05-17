import { array, bool, func, number, object, oneOfType, string } from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './Input.style';

const { COLOR } = THEME;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { focus: false };
  }

  render() {
    const {
      props: {
        disabled, error, hint, keyboard, label, onBlur, onFocus, style, ...inherit
      },
      state: { focus },
    } = this;

    return (
      <View style={styles.container}>
        { label &&
          <Text tiny lighten style={styles.label}>{label}</Text> }
        <TextInput
          {...inherit}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit
          editable={!disabled}
          keyboardType={keyboard}
          onBlur={onBlur || (() => !disabled && this.setState({ focus: false }))}
          onFocus={onFocus || (() => !disabled && this.setState({ focus: true }))}
          placeholderTextColor={COLOR.TEXT_LIGHTEN}
          underlineColorAndroid="transparent"
          style={StyleSheet.flatten([
            styles.input,
            disabled && styles.inputDisabled,
            !disabled && focus && styles.inputFocus,
            !disabled && error && styles.inputError,
            style,
          ])}
        />
        { !disabled && (error || hint) &&
          <Text color={error ? COLOR.ERROR : undefined} tiny lighten style={styles.label}>{error || hint}</Text> }
      </View>
    );
  }
}

Input.propTypes = {
  disabled: bool,
  error: string,
  hint: string,
  keyboard: string,
  label: string,
  onBlur: func,
  onFocus: func,
  style: oneOfType([array, object, number]),
};

Input.defaultProps = {
  disabled: false,
  error: undefined,
  hint: undefined,
  keyboard: 'default',
  label: undefined,
  onBlur: undefined,
  onFocus: undefined,
  style: [],
};

export default Input;
