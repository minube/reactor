import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const Icon = ({
  color, size, style, uri, value,
}) => (
  <Image
    resizeMode="contain"
    source={uri ? { uri } : ASSETS[value]}
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
  uri: string,
  value: string,
};

Icon.defaultProps = {
  color: undefined,
  size: undefined,
  style: [],
  uri: undefined,
  value: 'base',
};

export default Icon;
