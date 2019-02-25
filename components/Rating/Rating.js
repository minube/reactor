import { bool, number, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './Rating.style';

const Rating = ({
  caption, color, count, showValue, textColor, value, ...inherit
}) => (
  <View style={styles.container}>
    { [...Array(5).keys()].map(rate => (
      <Text {...inherit} color={color} key={rate} style={[styles.rate, inherit.style]}>
        {rate < Math.floor(value) ? '★' : '☆'}
      </Text>
    )) }
    { value > 0 && showValue
      && (
      <Text caption color={textColor} style={inherit.style}>
        {` ${value}/5`}
      </Text>
      ) }
    { count > 0
      && (
      <Text caption color={textColor} style={inherit.style}>
        {` (${`${count} ${caption}`.trim()})`}
      </Text>
      ) }
  </View>
);

Rating.propTypes = {
  caption: string,
  color: string,
  count: number,
  showValue: bool,
  textColor: string,
  value: number,
};

Rating.defaultProps = {
  caption: '',
  color: undefined,
  count: 0,
  showValue: true,
  textColor: undefined,
  value: 0,
};

export default Rating;
