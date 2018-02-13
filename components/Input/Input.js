import { array, bool, func, number, oneOfType, string } from 'prop-types';
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './Input.style';

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
        { label && <Text style={[styles.label, focus && styles.labelFocus]}>{label} </Text> }
        <TextInput
          {...inherit}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit
          editable={!disabled}
          keyboardType={keyboard}
          onBlur={onBlur || (() => !disabled && this.setState({ focus: false }))}
          onFocus={onFocus || (() => !disabled && this.setState({ focus: true }))}
          placeholderTextColor={undefined}
          underlineColorAndroid="transparent"
          style={[
            styles.input,
            focus && styles.inputFocus,
            error && styles.inputError,
            disabled && styles.inputDisabled,
            style,
          ]}
        />
        { (error || hint) && <Text style={[styles.label, error && styles.labelError]}>{error || hint} </Text> }
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
  style: oneOfType([array, number]),
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
