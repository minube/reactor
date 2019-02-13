import {
  arrayOf, bool, func, node, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import { InputHint, InputLabel } from '../Input';
import Item from './InputSelectItem';
import styles from './InputSelect.style';

class InputSelect extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(string),
    disabled: bool,
    error: string,
    hint: string,
    label: string,
    onChange: func,
    Template: node,
  };

  static defaultProps = {
    dataSource: [],
    disabled: false,
    error: undefined,
    hint: undefined,
    label: undefined,
    onChange: undefined,
    Template: Item,
  };

  state = {
    active: false,
  };

  _onToggleDataSource = () => {
    const { state: { active } } = this;
    this.setState({ active: !active });
  }

  _onItem = (index) => {
    const { _onToggleDataSource, props: { onChange } } = this;

    _onToggleDataSource();
    if (onChange) onChange(index);
  }

  render() {
    const {
      _onToggleDataSource, _onItem,
      props: {
        dataSource = [], disabled, error, hint, label, onChange, Template, ...inherit
      },
      state: { active },
    } = this;
    const selectedValue = inherit.value || 0;

    return (
      <View style={[styles.container, styles.content, inherit.style]}>
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
          <Template
            {...dataSource[selectedValue]}
            onPress={_onToggleDataSource}
            selected
          />
        </View>
        { hint && (
          <InputHint>
            {hint}
          </InputHint>)}

        { active && (
          <ScrollView style={[styles.dataSource, styles.content]}>
            { dataSource.map((value, index) => (
              <Template
                key={value.title}
                {...value}
                onPress={() => _onItem(index)}
                selected={index === selectedValue}
              />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default InputSelect;
