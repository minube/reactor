import { bool, number, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { ConsumerTheme } from '../../context';
import styles from './Text.style';

const determineStyle = ({
  body, caption, form, headline, subtitle, level,
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

  if (caption && level === 1) return styles.caption1;
  if (caption && level === 2) return styles.caption2;

  if (body && level === 2) return styles.body2;
  if (body && level === 3) return styles.body3;

  if (form) return styles.form;

  return styles.body1;
};

const Text = ({
  lighten, color,
  body, caption, form, headline, subtitle, level,
  ...inherit
}) => (
  <ConsumerTheme>
    { ({ FONT: { FAMILY } = {} }) => (
      <NativeText
        {...inherit}
        style={[
          styles.container,
          determineStyle({
            body, caption, form, headline, subtitle, level,
          }),
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
  form: bool,
  headline: bool,
  subtitle: bool,
  lighten: bool,
  level: number,
};

Text.defaultProps = {
  body: true,
  caption: false,
  color: undefined,
  form: false,
  headline: false,
  subtitle: false,
  lighten: false,
  level: 1,
};

export default Text;
