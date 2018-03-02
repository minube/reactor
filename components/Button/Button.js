import { array, bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { layout, THEME } from '../../common';
import { Activity, Icon, Text, Touchable } from '../';
import styles from './Button.style';

const { COLOR: { TEXT_LIGHTEN, WHITE } } = THEME;

const Button = ({
  accent, activity, color, disabled, flat, icon, onPress, primary, responsive, rounded, small, style, title,
  layout: { TEXT, BUTTON } = layout(), // eslint-disable-line
}) => (
  <Touchable
    disabled={disabled}
    onPress={!disabled ? onPress : undefined}
    style={StyleSheet.flatten([
      styles.touchable,
      !title && icon && styles.floating,
      rounded && styles.rounded,
    ])}
  >
    <View
      style={StyleSheet.flatten([
        styles.container,
        color && { backgroundColor: color },
        primary && styles.primary,
        accent && styles.accent,
        flat && styles.flat,
        small && styles.small,
        !small && responsive && { ...BUTTON.CONTAINER },
        !title && icon && styles.floating,
        rounded && styles.rounded,
        disabled && styles.disabled,
        style,
      ])}
    >
      { activity && <Activity color={flat ? TEXT_LIGHTEN : WHITE} style={title && styles.activity} type="small" /> }
      { !activity && icon &&
        <Icon value={icon} style={title ? styles.icon : styles.iconFloating} />}
      { title &&
        <Text
          style={StyleSheet.flatten([
            styles.text,
            flat && styles.textFlat,
            small && styles.textSmall,
            !small && responsive && TEXT.SMALL,
            disabled && styles.textDisabled])}
        >
          {title}
        </Text> }
    </View>
  </Touchable>
);

Button.propTypes = {
  accent: bool,
  activity: bool,
  color: string,
  disabled: bool,
  flat: bool,
  icon: string,
  onPress: func,
  primary: bool,
  responsive: bool,
  rounded: bool,
  small: bool,
  style: oneOfType([array, number]),
  title: string,
};

Button.defaultProps = {
  accent: false,
  activity: false,
  color: undefined,
  disabled: false,
  flat: false,
  icon: undefined,
  onPress: undefined,
  primary: false,
  responsive: false,
  rounded: false,
  small: false,
  style: [],
  title: undefined,
};

export default Button;
