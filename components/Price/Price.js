import { number, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import { format } from './modules';
import styles from './Price.style';

const LEFT_SYMBOLS = ['$'];

const Price = ({
  caption, fixed, symbol, value, ...inherit
}) => (
  <View style={styles.container}>
    { caption && (
      <Text headline level={6} {...inherit} style={[styles.minimize, inherit.style]}>
        {caption}
      </Text>)}
    { LEFT_SYMBOLS.includes(symbol) && (
      <Text headline level={6} {...inherit} style={[styles.minimize, inherit.style]}>
        {symbol}
      </Text>)}
    <Text headline level={6} {...inherit} style={inherit.style}>
      {format(value, fixed)}
    </Text>
    { !LEFT_SYMBOLS.includes(symbol) && (
      <Text headline level={6} {...inherit} style={[styles.minimize, inherit.style]}>
        {symbol}
      </Text>)}
  </View>
);

Price.propTypes = {
  caption: string,
  fixed: number,
  symbol: string,
  value: number,
};

Price.defaultProps = {
  caption: undefined,
  fixed: 0,
  symbol: '€',
  value: 0,
};

export default Price;
