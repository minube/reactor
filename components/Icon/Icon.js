import { array, bool, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const Icon = ({
  color, invert, size, style, value,
}) => (
  <Image
    resizeMode="contain"
    source={ASSETS[value] ? ASSETS[value] : { uri: value }}
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
  style: oneOfType([array, number]),
  value: string,
};

Icon.defaultProps = {
  color: undefined,
  invert: false,
  size: undefined,
  style: [],
  value: 'base',
};

export default Icon;
