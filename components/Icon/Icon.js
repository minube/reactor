import { array, bool, number, object, oneOfType, string } from 'prop-types';
import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const isWeb = Platform.OS === 'web';

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
      color && !isWeb && { tintColor: color },
      invert && isWeb && { filter: 'invert(100%)' },
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
