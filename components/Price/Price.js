import { array, number, object, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../Text';
import styles from './Price.style';

const LEFT_SYMBOLS = ['$'];

const Price = ({
  caption, fixed, style, symbol, value,
  large = value < 1000 // eslint-disable-line
}) => (
  <View style={styles.container}>
    { caption && <Text large style={StyleSheet.flatten([styles.minimize, style])}>{caption}</Text> }

    { LEFT_SYMBOLS.includes(symbol) &&
      <Text large={large} style={StyleSheet.flatten([styles.minimize, style])}>{symbol}</Text> }
    <Text large={large} bold style={style}>
      {
        parseFloat(Math.abs(value))
          .toFixed(fixed)
          // .replace(/\B(?=(\d{3})+(?!\d))/g, ',') // @TODO: Another option
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      }
    </Text>
    { !LEFT_SYMBOLS.includes(symbol) &&
      <Text large={large} style={StyleSheet.flatten([styles.minimize, style])}>{symbol}</Text> }
  </View>
);

Price.propTypes = {
  caption: string,
  fixed: number,
  style: oneOfType([array, number, object]),
  symbol: string,
  value: number,
};

Price.defaultProps = {
  caption: undefined,
  fixed: 0,
  style: [],
  symbol: '€',
  value: 0,
};

export default Price;
