import { bool, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { LAYOUT } from '../../common';
import styles from './Text.style';

const Text = ({
  accent, bold, color, italic, large, lighten, lighter, primary, semibold, small, tiny, title, ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,

      // -- appearance
      lighter && styles.lighter,
      semibold && styles.semibold,
      bold && styles.bold,
      italic && styles.italic,

      // -- size
      { ...LAYOUT.STYLE.TEXT.REGULAR },
      tiny && { ...LAYOUT.STYLE.TEXT.TINY },
      small && { ...LAYOUT.STYLE.TEXT.SMALL },
      large && { ...LAYOUT.STYLE.TEXT.LARGE },
      title && { ...LAYOUT.STYLE.TEXT.TITLE },
      inherit.style,

      // -- color
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
  italic: bool,
  large: bool,
  lighten: bool,
  lighter: bool,
  primary: bool,
  semibold: bool,
  small: bool,
  tiny: bool,
  title: bool,
};

Text.defaultProps = {
  accent: false,
  bold: false,
  color: undefined,
  italic: false,
  large: false,
  lighten: false,
  lighter: false,
  primary: false,
  semibold: false,
  small: false,
  tiny: false,
  title: false,
};

export default Text;
