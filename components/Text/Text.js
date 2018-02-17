import { bool, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import styles from './Text.style';

const Text = ({
  accent, bold, color, large, primary, small, tiny, ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,
      bold && styles.bold,
      tiny && styles.tiny,
      small && styles.small,
      large && styles.large,
      color && { color },
      primary && styles.primary,
      accent && styles.accent,
      inherit.style,
    ])}
  />
);

Text.propTypes = {
  accent: bool,
  bold: bool,
  color: string,
  large: bool,
  primary: bool,
  small: bool,
  tiny: bool,
};

Text.defaultProps = {
  accent: false,
  bold: false,
  color: undefined,
  large: false,
  primary: false,
  small: false,
  tiny: false,
};

export default Text;
