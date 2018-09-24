import { bool, number, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { ConsumerTheme } from '../../context';
import styles from './Text.style';

const determineStyle = ({
  body, caption, headline, subtitle, level,
}) => {
  if (headline && level === 0) return styles.headline0;
  if (headline && level === 1) return styles.headline1;
  if (headline && level === 2) return styles.headline2;
  if (headline && level === 3) return styles.headline3;
  if (headline && level === 4) return styles.headline4;
  if (headline && level === 5) return styles.headline5;
  if (headline && level === 6) return styles.headline6;

  if (subtitle && level === 1) return styles.subtitle1;
  if (subtitle && level === 2) return styles.subtitle2;
  if (subtitle && level === 3) return styles.subtitle3;

  if (caption) return styles.caption;

  if (body && level === 2) return styles.body2;
  if (body && level === 3) return styles.body3;

  return styles.body1;
};

const Text = ({ lighten, color, ...inherit }) => (
  <ConsumerTheme>
    { ({ FONT: { FAMILY } = {} }) => (
      <NativeText
        {...inherit}
        style={[
          styles.container,
          determineStyle(inherit),
          lighten && styles.lighten,
          // -- flatten
          StyleSheet.flatten([
            FAMILY && { fontFamily: FAMILY },
            inherit.style,
            color && { color },
          ]),
        ]}
      />
    )}
  </ConsumerTheme>
);

Text.propTypes = {
  body: bool,
  caption: bool,
  color: string,
  headline: bool,
  subtitle: bool,
  lighten: bool,
  level: number,
};

Text.defaultProps = {
  body: true,
  caption: false,
  color: undefined,
  headline: false,
  subtitle: false,
  lighten: false,
  level: 1,
};

export default Text;
