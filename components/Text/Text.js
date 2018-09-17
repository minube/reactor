import { bool, number, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import styles from './Text.style';

const { FONT } = THEME;

const Text = ({
  lighter, semibold, bold, italic,
  primary, accent, lighten, color,
  tiny, small, large, subtitle, title,
  numberOfLines,
  ...inherit
}) => (
  <NativeText
    {...inherit}
    numberOfLines={numberOfLines}
    style={[
      styles.container,
      // -- appearance
      lighter && styles.lighter,
      semibold && styles.semibold,
      bold && styles.bold,
      italic && styles.italic,
      // -- size
      LAYOUT.TEXT.REGULAR,
      tiny && LAYOUT.TEXT.TINY,
      small && LAYOUT.TEXT.SMALL,
      large && LAYOUT.TEXT.LARGE,
      subtitle && LAYOUT.TEXT.SUBTITLE,
      title && LAYOUT.TEXT.TITLE,
      // -- color
      lighten && styles.lighten,
      primary && styles.primary,
      accent && styles.accent,
      // -- flatten
      StyleSheet.flatten([
        inherit.style,
        color && { color },
        numberOfLines > 1 && (small || tiny) && {
          maxHeight: numberOfLines * (small ? FONT.SIZE.SMALL : FONT.SIZE.TINY),
          overflow: 'hidden',
        },
      ]),
    ]}
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
  numberOfLines: number,
  primary: bool,
  semibold: bool,
  small: bool,
  subtitle: bool,
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
  numberOfLines: undefined,
  primary: false,
  semibold: false,
  small: false,
  subtitle: false,
  tiny: false,
  title: false,
};

export default Text;
