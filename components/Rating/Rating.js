import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../Text';
import styles from './Rating.style';

const Rating = ({
  color, count, style, textColor, value, ...inherit
}) => (
  <View style={styles.container}>
    { [...Array(5).keys()].map(rate => (
      <Text {...inherit} color={color} key={rate} style={StyleSheet.flatten([styles.rate, style])}>
        {rate < value ? '★' : '☆'}
      </Text>)) }
    { count > 0 &&
      <Text color={textColor} style={StyleSheet.flatten([styles.count, style])}>{`(${count})`}</Text> }
  </View>
);

Rating.propTypes = {
  color: string,
  count: number,
  style: oneOfType([array, number]),
  textColor: string,
  value: number,
};

Rating.defaultProps = {
  color: undefined,
  count: undefined,
  style: [],
  textColor: undefined,
  value: 0,
};

export default Rating;
