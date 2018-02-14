import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './Price.style';

const LEFT_SYMBOLS = ['$'];

const Price = ({
  fixed, style, symbol, value,
}) => (
  <View style={[styles.container, value > 1000 && styles.containerSmall]}>
    { LEFT_SYMBOLS.includes(symbol) && <Text style={[styles.text, styles.symbol, style]}>{symbol}</Text> }
    <Text style={[styles.text, styles.value, style]}>
      {
        parseFloat(Math.abs(value))
          .toFixed(fixed)
          // .replace(/\B(?=(\d{3})+(?!\d))/g, ',') // @TODO: Another option
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      }
    </Text>
    { !LEFT_SYMBOLS.includes(symbol) && <Text style={[styles.text, styles.symbol, style]}>{symbol}</Text> }
  </View>
);

Price.propTypes = {
  fixed: number,
  style: oneOfType([array, number]),
  symbol: string,
  value: number,
};

Price.defaultProps = {
  fixed: 0,
  style: [],
  symbol: '$',
  value: 0,
};

export default Price;
