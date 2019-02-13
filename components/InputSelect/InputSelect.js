import {
  arrayOf, bool, func, node, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import Button from '../Button';
import { InputHint, InputLabel } from '../Input';
import Motion from '../Motion';
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
    const event = !disabled && dataSource.length > 1 ? _onToggleDataSource : undefined;

    return (
      <View style={[styles.container, inherit.style]}>
        { label && (
          <InputLabel error={error}>
            {label}
          </InputLabel>)}

        <Motion
          style={[styles.button, label && styles.marginLabel]}
          timeline={[{ property: 'rotate', value: active ? '180deg' : '0deg' }]}
        >
          <Button contained={false} icon="expand" onPress={event} />
        </Motion>

        <View style={[styles.content, !disabled && error && styles.error, disabled && styles.disabled]}>
          <Template {...dataSource[selectedValue]} disabled={disabled} onPress={event} selected />
        </View>
        { hint && (
          <InputHint>
            {hint}
          </InputHint>)}

        { active && (
          <ScrollView style={[styles.dataSource, styles.content, label && styles.marginLabel]}>
            { dataSource.map((item, index) => (
              <Template
                key={item.title}
                {...item}
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
