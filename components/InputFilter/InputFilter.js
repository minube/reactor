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
      JSON.stringify(Object.values(item)).toLowerCase().search(value) > -1
    ));

    this.setState({ dataFiltered });
  }

  _onClickItem = (item) => {
    const { onClickItem } = this.props;
    onClickItem(item);
    this.setState({ inputValue: item.name, visible: false });
  };

  render() {
    const {
      _onChange, _onClickItem,
      state: {
        inputValue, visible, dataFiltered,
      },
      props: { ...inherit },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
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
                <Text subtitle level={2} key={item.id} numberOfLines={1}>{item.name}</Text>
              </Touchable>
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default InputFilter;
