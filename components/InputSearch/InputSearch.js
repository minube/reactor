import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Text from '../Text';
import Input from '../Input';
import Touchable from '../Touchable';
import styles from './InputSearch.style';

const TIMEOUT = 500;

class Searcher extends PureComponent {
  static propTypes = {
    color: string,
    dataSource: arrayOf(shape({})),
    disabled: bool,
    hint: string,
    label: string,
    onChange: func,
    onClickItem: func,
    value: string,
  };

  static defaultProps = {
    color: undefined,
    dataSource: [],
    disabled: false,
    hint: undefined,
    label: undefined,
    onChange: undefined,
    onClickItem: undefined,
    value: undefined,
  };

  constructor(props) {
    super(props);
    const { value } = props;

    this.searcherTimeout = undefined;
    this.state = { inputValue: value, visible: true };
  }

  _onChange = async (value) => {
    const { onChange } = this.props;

    this.setState({ inputValue: value, visible: true });

    if (this.searcherTimeout) clearTimeout(this.searcherTimeout);

    this.searcherTimeout = setTimeout(async () => {
      await onChange(value);
    }, TIMEOUT);
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
        inputValue, visible,
      },
      props: { dataSource, ...inherit },
    } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        <Input
          {...inherit}
          icon="search"
          onChange={values => _onChange(values)}
          value={inputValue}
          style={styles.input}
        />
        {visible && (
          <View style={[styles.list, inherit.label ? styles.marginListLabel : styles.marginList]}>
            {dataSource.map((item, index) => (
              <Touchable
                style={[styles.item, index !== dataSource.length - 1 && styles.border]}
                key={item.id}
                onPress={() => _onClickItem(item)}
              >
                <Text subtitle level={2} key={item.id} numberOfLines={1}>{item.name}</Text>
                {item.subtitle && <Text body level={2} numberOfLines={1}>{item.subtitle}</Text>}
              </Touchable>
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default Searcher;
