import { array, bool, number, object, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const Icon = ({
  color, invert, size, style, value,
}) => (
  <Image
    resizeMode="contain"
    source={ASSETS[value] // eslint-disable-line
      ? ASSETS[value]
      : isNaN(value) ? { uri: value } : value} // eslint-disable-line
    style={StyleSheet.flatten([
      styles.container,
      color && { tintColor: color },
      invert && { filter: 'invert(100%)' },
      size && { width: size, height: size },
      style,
    ])}
  />
);

Icon.propTypes = {
  color: string,
  invert: bool,
  size: number,
  style: oneOfType([array, number, object]),
  value: oneOfType([number, string]),
};

Icon.defaultProps = {
  color: undefined,
  invert: false,
  size: undefined,
  style: [],
  value: 'base',
};

export default Icon;
