import { bool, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const isWeb = Platform.OS === 'web';

const Icon = ({
  color, invert, size, value, ...inherit
}) => (
  <Image
    resizeMode="contain"
    source={ASSETS[value] // eslint-disable-line
      ? ASSETS[value]
      : isNaN(value) ? { uri: value } : value} // eslint-disable-line
    style={[
      styles.container,
      inherit.style,

      (color || invert || size) && StyleSheet.flatten([
        color && !isWeb && { tintColor: color },
        invert && isWeb && { filter: 'invert(100%)' },
        size && { width: size, height: size },
      ]),
    ]}
  />
);

Icon.propTypes = {
  color: string,
  invert: bool,
  size: number,
  value: oneOfType([number, string]),
};

Icon.defaultProps = {
  color: undefined,
  invert: false,
  size: undefined,
  value: 'base',
};

export default Icon;
