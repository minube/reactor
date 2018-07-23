import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Button from '../Button';
import Input, { InputLabel } from '../Input';
import Touchable from '../Touchable';
import ItemList from './components/ItemList';
import filterDataSource from './modules/filterDataSource';
import styles from './InputList.style';

class InputList extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(shape({})),
    disabled: bool,
    error: string,
    hint: string,
    itemTemplate: func,
    label: string,
    onChange: func,
    value: arrayOf(string),
  };

  static defaultProps = {
    dataSource: undefined,
    disabled: false,
    error: undefined,
    hint: undefined,
    itemTemplate: undefined,
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

  _onSelectItem = (item) => {
    const { props: { onChange, value = [] } } = this;

    onChange([...value, item]);
    this.setState({ inputValue: undefined });
  }

  render() {
    const {
      _onAdd, _onInputChange, _onSelectItem, _onRemove,
      props: {
        dataSource, hint, itemTemplate, onChange, value = [], ...inherit
      },
      state: {
        inputValue,
      },
    } = this;
    const { disabled, error } = inherit;
    const suggestions = dataSource && inputValue ? filterDataSource(dataSource, inputValue, value) : [];

    return (
      <View style={[styles.container, inherit.style]}>
        <Input
          {...inherit}
          onChange={_onInputChange}
          onSubmitEditing={_onAdd}
          style={styles.input}
          value={inputValue}
        />
        { suggestions.length > 0 && (
          <View style={[styles.value, styles.dataSource]}>
            { suggestions.map(item => (
              <Touchable onPress={() => _onSelectItem(item)} style={styles.item}>
                <ItemList template={itemTemplate} value={item} />
              </Touchable>))}
          </View>
        )}

        { value.length > 0 && (
          <View style={[styles.value, !disabled && error && styles.error, disabled && styles.disabled]}>
            { value.map(item => (
              <View
                key={itemTemplate ? item.id : item}
                pointerEvents={disabled ? 'none' : undefined}
                style={styles.item}
              >
                <ItemList template={itemTemplate} value={item} />
                <Button
                  small
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
