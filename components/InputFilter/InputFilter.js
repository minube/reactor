import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Text from '../Text';
import Input from '../Input';
import Touchable from '../Touchable';
import styles from './InputFilter.style';


class InputFilter extends PureComponent {
  static propTypes = {
    color: string,
    dataSource: arrayOf(shape({})),
    disabled: bool,
    hint: string,
    label: string,
    onClickItem: func,
    onChange: func,
    subtitle: string,
    value: string,
  };

  static defaultProps = {
    color: undefined,
    dataSource: [],
    disabled: false,
    hint: undefined,
    label: undefined,
    onClickItem: undefined,
    onChange: undefined,
    subtitle: undefined,
    value: undefined,
  };

  constructor(props) {
    super(props);
    const { value, dataSource } = props;

    this.searcherTimeout = undefined;
    this.state = { inputValue: value, visible: false, dataFiltered: dataSource };
  }

  _onChange = async (value) => {
    const { dataSource, onClickItem } = this.props;
    this.setState({ inputValue: value, visible: value.length > 2 });

    if (value.length === 0) onClickItem({ id: undefined });

    const dataFiltered = dataSource.filter(item => (
      item.name.toLowerCase().search(value) > -1
    ));

    this.setState({ dataFiltered });
  }

  _onClickItem = (item) => {
    const { onClickItem } = this.props;
    onClickItem(item);
    this.setState({ inputValue: item.name, visible: false });
  };

  _onToggle = (event) => {
    const { state: { visible }, _onToggleOutside } = this;
    const { onClickItem } = this.props;

    if (event) {
      this.touchable = event.currentTarget;
      if (event.target.value && event.target.value.length > 0) onClickItem({ id: undefined });
    }

    if (!visible) document.addEventListener('click', _onToggleOutside, false);
    else document.removeEventListener('click', _onToggleOutside, false);

    this.setState({ inputValue: '', visible: false });
  }

  _onToggleOutside = (event) => {
    const { _onToggle } = this;
    if (this.touchable.contains(event.target)) return;
    _onToggle();
  }

  render() {
    const {
      _onToggle, _onChange, _onClickItem,
      state: {
        inputValue, visible, dataFiltered,
      },
      props: { subtitle, ...inherit },
    } = this;

    return (
      <View style={[styles.container, inherit.style]} onClick={event => _onToggle(event)}>
        <Input
          {...inherit}
          onChange={values => _onChange(values)}
          value={inputValue}
          style={styles.input}
        />
        {visible && (
          <View style={[styles.list, inherit.label ? styles.marginListLabel : styles.marginList]}>
            {dataFiltered.map((item, index) => (
              <Touchable
                style={[styles.item, index !== dataFiltered.length - 1 && styles.border]}
                key={item.id}
                onPress={() => _onClickItem(item)}
              >
                <View>
                  <Text subtitle level={2} key={item.id} numberOfLines={1}>
                    {`${item.name}${subtitle && ` - ${item[subtitle]}`}`}
                  </Text>
                </View>
              </Touchable>
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default InputFilter;
