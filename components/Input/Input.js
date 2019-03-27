import {
  bool, func, number, string,
} from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';
import InputHint from './InputHint';
import InputLabel from './InputLabel';
import Icon from '../Icon';
import styles from './Input.style';

const { COLOR } = THEME;

class Input extends Component {
  static propTypes = {
    color: string,
    disabled: bool,
    error: string,
    hint: string,
    icon: string,
    keyboard: string,
    label: string,
    lines: number,
    onBlur: func,
    onChange: func,
    onFocus: func,
    required: bool,
    requiredIcon: bool,
  };

  static defaultProps = {
    color: undefined,
    disabled: false,
    error: undefined,
    hint: undefined,
    icon: undefined,
    keyboard: 'default',
    label: undefined,
    lines: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    required: false,
    requiredIcon: false,
  };

  state = {
    focus: false,
  };

  render() {
    const {
      props: {
        color, disabled, error, hint, icon, keyboard, label, lines, onBlur, onChange, onFocus, required, requiredIcon,
        ...inherit
      },
      state: { focus },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        { label && (
          <InputLabel color={color} focus={focus} error={error}>
            {label}
          </InputLabel>
        )}
        <View
          style={[
            styles.content,
            disabled && styles.disabled,
            !disabled && focus && (color ? { borderColor: color } : styles.focus),
            !disabled && error && styles.error,
          ]}
        >
          { icon && <Icon value={icon} style={styles.icon} />}
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
            style={[styles.input, disabled && styles.inputDisabled]}
          />
          { (error || (required && requiredIcon)) && (
            <Icon value={error ? 'error' : 'errorOutline'} style={styles.icon} />
          )}
        </View>
        { hint && (
          <InputHint>
            {hint}
          </InputHint>
        )}
      </View>
    );
  }
}

export { InputHint, InputLabel };
export default Input;
