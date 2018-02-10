import { array, bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { THEME, STYLE } from '../../common';
import { Activity, Icon, Touchable } from '../';
import styles from './Button.style';

const { COLOR: { PRIMARY, WHITE } } = THEME;

const Button = ({
  activity, color, disabled, icon, onPress, style, title,
}) => (
  <Touchable disabled={disabled} onPress={!disabled ? onPress : undefined} raised={color === undefined}>
    <View
      style={[
        STYLE.ROW,
        STYLE.CENTERED,
        styles.container,
        color && { backgroundColor: color },
        !title && icon && styles.floating,
        color && !disabled && STYLE.SHADOW,
        color && disabled && styles.disabled,
        style,
      ]}
    >
      { activity && <Activity color={color ? WHITE : PRIMARY} style={title && styles.activity} type="small" /> }
      { !activity && icon &&
        <Icon value={icon} style={[title ? styles.icon : styles.iconFloating]} />}
      { title &&
        <Text style={[
          styles.text,
          !disabled && color && color !== WHITE && styles.textHighlight,
          disabled && styles.textDisabled]}
        >
          {title}
        </Text> }
    </View>
  </Touchable>
);

Button.propTypes = {
  activity: bool,
  color: string,
  disabled: bool,
  icon: string,
  onPress: func,
  style: oneOfType([array, number]),
  title: string,
};

Button.defaultProps = {
  activity: false,
  color: undefined,
  disabled: false,
  icon: undefined,
  onPress: undefined,
  style: [],
  title: undefined,
};

export default Button;
