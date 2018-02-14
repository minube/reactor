import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './Rating.style';

const Rating = ({
  color, count, value, style,
}) => (
  <View style={styles.container}>
    { [...Array(5).keys()].map(rate => (
      <Text key={rate} style={[styles.rate, color && { color }, style]}>
        {rate < value ? '★' : '☆'}
      </Text>)) }
    { count > 0 && <Text style={[styles.count, style]}>{`(${count})`}</Text> }
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
