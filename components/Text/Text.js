import { bool, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { LAYOUT } from '../../common';
import styles from './Text.style';

const Text = ({
  accent, bold, color, large, lighten, primary, small, tiny, title, ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,

      bold && styles.bold,
      tiny && { ...LAYOUT.STYLE.TEXT.TINY },
      small && { ...LAYOUT.STYLE.TEXT.SMALL },
      large && { ...LAYOUT.STYLE.TEXT.LARGE },
      title && { ...LAYOUT.STYLE.TEXT.TITLE },

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
  title: bool,
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
  title: false,
};

export default Text;
