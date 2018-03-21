import { array, bool, func, number, object, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { Activity, Icon, Text, Touchable } from '../';
import styles from './Button.style';

const { COLOR: { TEXT_LIGHTEN, WHITE } } = THEME;

const Button = ({
  accent, activity, color, disabled, flat, icon, onPress, primary, responsive, rounded, small, style, title,
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
        flat && styles.flat,
        flat && color && { borderColor: color },
        color && { backgroundColor: !flat ? color : undefined },
        primary && styles.primary,
        accent && styles.accent,
        small && styles.small,
        !small && responsive && { ...LAYOUT.STYLE.BUTTON.CONTAINER },
        !title && !small && icon && styles.floating,
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
          semibold
          color={flat && color ? color : undefined}
          style={StyleSheet.flatten([
            styles.text,
            flat && styles.textFlat,
            small && styles.textSmall,
            !small && responsive && LAYOUT.STYLE.TEXT.SMALL,
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
  style: oneOfType([array, number, object]),
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
