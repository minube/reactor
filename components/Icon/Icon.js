import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const Icon = ({
  color, size, style, value,
}) => (
  <Image
    resizeMode="contain"
    source={ASSETS[value]}
    style={StyleSheet.flatten([
      styles.container,
      color && { tintColor: color },
      size && { width: size, height: size },
      style,
    ])}
  />
);

Icon.propTypes = {
  color: string,
  size: number,
  style: oneOfType([array, number]),
  value: string,
};

Icon.defaultProps = {
  color: undefined,
  size: undefined,
  style: [],
  value: 'base',
};

export default Icon;
