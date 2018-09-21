import {
  arrayOf, bool, func, oneOfType, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import Input from '../Input';
import Touchable from '../Touchable';
import ItemList from './components/ItemList';
import filterDataSource from './modules/filterDataSource';
import styles from './InputList.style';

class InputList extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(oneOfType([string, shape({})])),
    dataSourceField: string,
    disabled: bool,
    error: string,
    hint: string,
    itemTemplate: func,
    label: string,
    onChange: func,
    value: arrayOf(oneOfType([string, shape({})])),
  };

  static defaultProps = {
    dataSource: undefined,
    dataSourceField: undefined,
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
    suggestions: [],
  };

  _onInputChange = (inputValue) => {
    const { props: { dataSource, dataSourceField, value } } = this;

    this.setState({
      inputValue,
      suggestions: dataSource && inputValue ? filterDataSource(dataSource, inputValue, value, dataSourceField) : [],
    });
  }

  _onInputSubmit = () => {
    const {
      _onChange,
      props: { dataSource, dataSourceField },
      state: { inputValue, suggestions },
    } = this;

    if (suggestions.length === 1 || (!dataSource && inputValue)) {
      const suggestion = suggestions[0];
      const newItem = (typeof suggestion === 'object' ? suggestion[dataSourceField] : suggestion) || inputValue;
      _onChange(newItem);
    }
  }

  _onSelectItem = (item) => {
    const { _onChange, props: { dataSourceField } } = this;
    const newItem = (typeof item === 'object' && dataSourceField) ? item[dataSourceField] : item;
    _onChange(newItem);
  }

  _onRemoveItem = (item) => {
    const { props: { onChange, value = [] } } = this;
    const newValue = value.filter(i => i !== item);
    onChange(newValue.length > 0 ? newValue : undefined);
  }

  _onChange = (item) => {
    const { props: { onChange, value = [] } } = this;

    if (!value.includes(item)) {
      onChange([...value, item]);
      this.setState({ inputValue: undefined, suggestions: [] });
    }
  }

  render() {
    const {
      _onInputSubmit, _onInputChange, _onSelectItem, _onRemoveItem,
      props: {
        dataSource, dataSourceField, itemTemplate, onChange, value = [], ...inherit
      },
      state: { inputValue, suggestions = [] },
    } = this;
    const { disabled, error } = inherit;
    const objDataSource = dataSource && typeof dataSource[0] === 'object';

    return (
      <View style={[styles.container, inherit.style]}>
        <Input
          {...inherit}
          onChange={_onInputChange}
          onSubmitEditing={_onInputSubmit}
          style={styles.input}
          value={inputValue}
        />

        { suggestions.length > 0 && (
          <View style={[styles.content, styles.suggestions]}>
            { suggestions.map(item => (
              <Touchable
                key={objDataSource ? item[dataSourceField] : item}
                onPress={() => _onSelectItem(item)}
                style={styles.suggestion}
              >
                <ItemList template={itemTemplate} value={item} />
              </Touchable>))}
          </View>
        )}

        { value.length > 0 && (
          <View
            style={[styles.content, styles.values, !disabled && error && styles.error, disabled && styles.disabled]}
          >
            { value.map((item) => {
              const itemValue = objDataSource
                ? dataSource.find(i => i[dataSourceField] === item).title
                : item;

              return (
                <View
                  key={JSON.stringify(itemValue)}
                  pointerEvents={disabled ? 'none' : undefined}
                  style={styles.value}
                >
                  <ItemList template={itemTemplate} value={itemValue} />
                  <Touchable onPress={() => _onRemoveItem(item)}>
                    <Icon value="close" style={styles.iconClose} />
                  </Touchable>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

export default InputList;
