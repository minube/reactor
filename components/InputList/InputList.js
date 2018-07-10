import {
  arrayOf, bool, func, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Button from '../Button';
import Input, { InputLabel } from '../Input';
import Text from '../Text';
import styles from './InputList.style';

class InputList extends PureComponent {
  static propTypes = {
    disabled: bool,
    error: string,
    hint: string,
    label: string,
    onChange: func,
    value: arrayOf(string),
  };

  static defaultProps = {
    disabled: false,
    error: undefined,
    hint: undefined,
    label: undefined,
    onChange() {},
    value: undefined,
  };

  state = {
    inputValue: undefined,
  };

  _onInputChange = inputValue => this.setState({ inputValue })

  _onAdd = () => {
    const { props: { onChange, value = [] }, state: { inputValue } } = this;

    if (!value.find(item => item === inputValue)) {
      onChange([...value, inputValue]);
      this.setState({ inputValue: undefined });
    }
  }

  _onRemove = (item) => {
    const { props: { onChange, value = [] } } = this;
    const newValue = value.filter(i => i !== item);
    onChange(newValue.length > 0 ? newValue : undefined);
  }

  render() {
    const {
      _onAdd, _onInputChange, _onRemove,
      props: {
        disabled, error, hint, label, onChange, value = [], ...inherit
      },
      state: {
        inputValue,
      },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        <Input
          disabled={disabled}
          error={error}
          label={label}
          onChange={_onInputChange}
          onSubmitEditing={_onAdd}
          style={styles.input}
          value={inputValue}
        />
        { value.length > 0 && !error && (
          <View
            style={[
              styles.value,
              !disabled && error && styles.inputError,
              disabled && styles.inputDisabled,
            ]}
          >
            { value.map(item => (
              <View pointerEvents={disabled ? 'none' : undefined} style={styles.item}>
                <Text small style={styles.itemText}>
                  {item}
                </Text>
                <Button
                  small
                  _rounded
                  contained={false}
                  icon="closeDark"
                  onPress={() => _onRemove(item)}
                  style={styles.itemButton}
                />
              </View>
            ))}
          </View>
        )}
        { !disabled && hint && <InputLabel value={hint} /> }
      </View>
    );
  }
}

export default InputList;
