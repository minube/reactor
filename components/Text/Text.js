import { bool } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import styles from './Text.style';

const Text = ({
  bold, tiny, small, large, ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,
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
  tiny: bool,
  small: bool,
  large: bool,
};

Text.defaultProps = {
  bold: false,
  tiny: false,
  small: false,
  large: false,
};

export default Text;
