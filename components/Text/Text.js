import { bool, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import styles from './Text.style';

const Text = ({
  bold, color, tiny, small, large, ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,
      color && { color },
      bold && styles.bold,
      tiny && styles.tiny,
      small && styles.small,
      large && styles.large,
      inherit.style,
    ])}
  />
);

Text.propTypes = {
  bold: bool,
  color: string,
  large: bool,
  small: bool,
  tiny: bool,
};

Text.defaultProps = {
  bold: false,
  color: undefined,
  large: false,
  small: false,
  tiny: false,
};

export default Text;
