import { number, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import { format } from './modules';
import styles from './Price.style';

const LEFT_SYMBOLS = ['$'];

const Price = ({
  title, fixed, symbol, value, ...inherit
}) => (
  <View style={styles.container}>
    { title && (
      <Text {...inherit} style={[styles.minimize, inherit.style]}>
        {title}
      </Text>)}
    { LEFT_SYMBOLS.includes(symbol) && (
      <Text {...inherit} style={[styles.minimize, inherit.style]}>
        {symbol}
      </Text>)}
    <Text {...inherit} style={inherit.style}>
      {format(value, fixed)}
    </Text>
    { !LEFT_SYMBOLS.includes(symbol) && (
      <Text {...inherit} style={[styles.minimize, inherit.style]}>
        {symbol}
      </Text>)}
  </View>
);

Price.propTypes = {
  title: string,
  fixed: number,
  symbol: string,
  value: number,
};

Price.defaultProps = {
  title: undefined,
  fixed: 0,
  symbol: '€',
  value: 0,
};

export default Price;
