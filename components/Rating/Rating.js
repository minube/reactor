import { array, bool, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../Text';
import styles from './Rating.style';

const Rating = ({
  caption, color, count, showValue, style, textColor, value, ...inherit
}) => (
  <View style={styles.container}>
    { [...Array(5).keys()].map(rate => (
      <Text {...inherit} primary color={color} key={rate} style={StyleSheet.flatten([styles.rate, style])}>
        {rate < Math.floor(value) ? '★' : '☆'}
      </Text>)) }
    { value > 0 && showValue &&
      <Text bold lighten tiny color={textColor} style={style}>{` ${value}/5`}</Text> }
    { count > 0 &&
      <Text lighten tiny color={textColor} style={style}>
        {' (' + `${count} ${caption}`.trim() + ')'}
      </Text> }
  </View>
);

Rating.propTypes = {
  caption: string,
  color: string,
  count: number,
  showValue: bool,
  style: oneOfType([array, number]),
  textColor: string,
  value: number,
};

Rating.defaultProps = {
  caption: '',
  color: undefined,
  count: 0,
  showValue: true,
  style: [],
  textColor: undefined,
  value: 0,
};

export default Rating;
