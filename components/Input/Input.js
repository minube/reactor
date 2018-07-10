import {
  bool, func, number, string,
} from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';
import InputLabel from './InputLabel';
import styles from './Input.style';

const { COLOR } = THEME;

class Input extends Component {
  static propTypes = {
    disabled: bool,
    error: string,
    hint: string,
    keyboard: string,
    label: string,
    lines: number,
    onBlur: func,
    onChange: func,
    onFocus: func,
  };

  static defaultProps = {
    disabled: false,
    error: undefined,
    hint: undefined,
    keyboard: 'default',
    label: undefined,
    lines: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
  };

  state = {
    focus: false,
  };

  render() {
    const {
      props: {
        disabled, error, hint, keyboard, label, lines, onBlur, onChange, onFocus, ...inherit
      },
      state: { focus },
    } = this;
    const hasError = error || (inherit.required && !inherit.value);

    return (
      <View style={[styles.container, inherit.style]}>
        { label && <InputLabel value={label} /> }
        <TextInput
          {...inherit}
          value={inherit.value || ''}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit
          editable={!disabled}
          keyboardType={keyboard}
          numberOfLines={lines}
          multiline={lines > 1}
          onChangeText={onChange}
          onBlur={onBlur || (() => !disabled && this.setState({ focus: false }))}
          onFocus={onFocus || (() => !disabled && this.setState({ focus: true }))}
          placeholderTextColor={COLOR.TEXT_LIGHTEN}
          underlineColorAndroid="transparent"
          style={[
            styles.input,
            disabled && styles.inputDisabled,
            !disabled && focus && styles.inputFocus,
            !disabled && hasError && styles.inputError,
          ]}
        />
        { !disabled && (hasError || hint) && <InputLabel error={hasError} value={error || hint || 'required'} /> }
      </View>
    );
  }
}

export { InputLabel };
export default Input;
