import { bool, func, node, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { Activity, Icon, Text, Touchable } from '../';
import styles from './Button.style';

const { COLOR: { TEXT_LIGHTEN, WHITE }, STYLE } = THEME;

const Button = ({
  accent, activity, children, color, disabled, flat, icon, onPress, primary, responsive, rounded, small, title,
  isWhite = color === WHITE, // eslint-disable-line
  ...inherit
}) => (
  <Touchable
    disabled={disabled || !onPress}
    onPress={onPress}
    style={[
      styles.touchable,
      !title && !small && icon && styles.floating,
      rounded && styles.rounded,
      inherit.style,
    ]}
  >
    <View
      style={[
        styles.container,
        STYLE.BUTTON_REGULAR,
        primary && styles.primary,
        accent && styles.accent,
        small && STYLE.BUTTON_SMALL,
        !small && responsive && LAYOUT.STYLE.BUTTON.CONTAINER,
        !title && !small && icon && styles.floating,
        rounded && styles.rounded,
        disabled && styles.disabled,

        // flat behavior
        flat
        ?
          StyleSheet.flatten([
            isWhite ? styles.transparent : styles.flat,
            color && !isWhite && { borderColor: color },
          ])
        :
          color && !isWhite && StyleSheet.flatten([{ backgroundColor: color }]),
      ]}
    >
      { activity &&
        <Activity color={flat ? TEXT_LIGHTEN : WHITE} style={title && styles.activity} type="small" /> }
      { !activity && icon &&
        <Icon value={icon} style={title ? styles.icon : styles.iconFloating} />}
      { title &&
        <Text
          semibold
          color={flat && color ? color : undefined}
          style={[
            styles.text,
            flat && styles.textFlat,
            small && styles.textSmall,
            !small && responsive && LAYOUT.STYLE.TEXT.SMALL,
            disabled && styles.textDisabled]}
        >
          {title}
        </Text> }
      { children }
    </View>
  </Touchable>
);

Button.propTypes = {
  accent: bool,
  activity: bool,
  children: node,
  color: string,
  disabled: bool,
  flat: bool,
  icon: string,
  onPress: func,
  primary: bool,
  responsive: bool,
  rounded: bool,
  small: bool,
  title: string,
};

Button.defaultProps = {
  accent: false,
  activity: false,
  children: undefined,
  color: undefined,
  disabled: false,
  flat: false,
  icon: undefined,
  onPress: undefined,
  primary: false,
  responsive: false,
  rounded: false,
  small: false,
  title: undefined,
};

export default Button;
