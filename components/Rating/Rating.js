import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { STYLE } from '../../common';
import styles from './Rating.style';

const Rating = ({
  color, count, value, style,
}) => (
  <View style={styles.container}>
    { [...Array(5).keys()].map(rate => (
      <Text key={rate} style={[styles.rate, rate < value && styles.rateFill, color && { color }, style]}>
        {rate < value ? '★' : '☆'}
      </Text>)) }
    { count && <Text style={styles.count}>{`(${count})`}</Text> }
  </View>
);

Rating.propTypes = {
  color: string,
  count: number,
  style: oneOfType([array, number]),
  value: number,
};

Rating.defaultProps = {
  color: undefined,
  count: undefined,
  style: [],
  value: 0,
};

export default Rating;
