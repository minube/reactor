import { bool, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { layout } from '../../common';
import styles from './Text.style';

const Text = ({
  accent, bold, color, large, lighten, primary, small, tiny,
  layout: { TEXT } = layout(), // eslint-disable-line
  ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,

      bold && styles.bold,
      tiny && { ...TEXT.TINY },
      small && { ...TEXT.SMALL },
      large && { ...TEXT.LARGE },

      inherit.style,
      lighten && styles.lighten,
      primary && styles.primary,
      accent && styles.accent,
      color && { color },
    ])}
  />
);

Text.propTypes = {
  accent: bool,
  bold: bool,
  color: string,
  large: bool,
  lighten: bool,
  primary: bool,
  small: bool,
  tiny: bool,
};

Text.defaultProps = {
  accent: false,
  bold: false,
  color: undefined,
  large: false,
  lighten: false,
  primary: false,
  small: false,
  tiny: false,
};

export default Text;
