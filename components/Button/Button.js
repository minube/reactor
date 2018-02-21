import { array, bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import { Activity, Icon, Text, Touchable } from '../';
import styles from './Button.style';

const { COLOR: { TEXT_LIGHTEN, WHITE } } = THEME;

const Button = ({
  accent, activity, color, disabled, flat, icon, onPress, primary, responsive, rounded, small, style, title,
}) => (
  <Touchable disabled={disabled} onPress={!disabled ? onPress : undefined}>
    <View
      style={StyleSheet.flatten([
        styles.container,
        color && { backgroundColor: color },
        primary && styles.primary,
        accent && styles.accent,
        flat && styles.flat,
        !title && icon && styles.floating,
        responsive && styles.responsive,
        small && styles.small,
        rounded && styles.rounded,
        disabled && styles.disabled,
        style,
      ])}
    >
      { activity && <Activity color={flat ? TEXT_LIGHTEN : WHITE} style={title && styles.activity} type="small" /> }
      { !activity && icon &&
        <Icon value={icon} style={title ? styles.icon : styles.iconFloating} />}
      { title &&
        <Text style={StyleSheet.flatten([
          styles.text,
          flat && styles.textFlat,
          responsive && styles.textResponsive,
          small && styles.textSmall,
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
