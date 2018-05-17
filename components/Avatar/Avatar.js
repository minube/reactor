import { array, bool, oneOfType, string, number } from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

import Image from '../Image';
import styles from './Avatar.style';

const Avatar = ({
  image, large, small, style,
}) => (
  <Image
    resizeMode="cover"
    source={{ uri: image }}
    style={StyleSheet.flatten([
      styles.image,
      style,
      small && styles.small,
      large && styles.large,
    ])}
  />
);
Avatar.propTypes = {
  image: string.isRequired,
  large: bool,
  small: bool,
  style: oneOfType([array, number]),
};

Avatar.defaultProps = {
  large: false,
  small: false,
  style: [],
};

export default Avatar;
