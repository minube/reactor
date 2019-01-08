import {
  bool, func, number, string,
} from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';
import InputLabel from './InputLabel';
import Text from '../Text';
import styles from './Input.style';

const { COLOR } = THEME;

class Input extends Component {
  static propTypes = {
    color: string,
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
    color: undefined,
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
        color, disabled, error, hint, keyboard, label, lines, onBlur, onChange, onFocus, ...inherit
      },
      state: { focus },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        { (label || (!disabled && error)) && <InputLabel value={label} error={error} /> }
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
            !disabled && focus && (color ? { borderColor: color } : styles.inputFocus),
            !disabled && error && styles.inputError,
          ]}
        />
        { hint && (
          <Text caption level={2} lighten>
            {hint}
          </Text>)}
      </View>
    );
  }
}

export { InputLabel };
export default Input;
