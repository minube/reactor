import {
  bool, func, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';

import Text from '../Text';
import Input from '../Input';
import Touchable from '../Touchable';
import styles from './InputSearcher.style';

const TIMEOUT = 500;

class Searcher extends PureComponent {
  static propTypes = {
    color: string,
    data: shape({}),
    disabled: bool,
    hint: string,
    label: string,
    onChange: func,
    onClickItem: func,
    value: string,
  };

  static defaultProps = {
    color: undefined,
    data: undefined,
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
    this.state = { inputValue: value, data: [] };
  }

  _onChange = (value) => {
    const { onChange } = this.props;

    this.setState({ inputValue: value });

    if (value.length > 2) {
      if (this.searcherTimeout) clearTimeout(this.searcherTimeout);

      this.searcherTimeout = setTimeout(async () => {
        const response = await onChange(value);
        this.setState({ data: response });
      }, TIMEOUT);
    } else {
      this.setState({ data: [] });
    }
  }

  _onClickItem = item => this.setState({ data: {}, inputValue: item.name });

  render() {
    const {
      _onChange, _onClickItem,
      state: {
        inputValue, data,
      },
      props: { value, ...inherit },
    } = this;

    return (
      <View>
        <Input
          {...inherit}
          icon="search"
          onChange={values => _onChange(values)}
          placeholder="Look for ..."
          value={inputValue}
        />
        <FlatList
          data={data}
          style={styles.list}
          renderItem={({ item }) => (
            <Touchable onPress={() => _onClickItem(item)}>
              <Text style={styles.item} numberOfLines={1}>{item.name}</Text>
            </Touchable>
          )}
        />
      </View>
    );
  }
}

export default Searcher;
