import {
  bool, func, node, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import {
  Activity, Icon, Text, Touchable,
} from '..';
import styles from './Button.style';

const { COLOR: { TEXT_LIGHTEN, WHITE }, STYLE } = THEME;

const Button = ({
  accent, activity, children, color, contained, disabled, icon, onPress, outlined,
  primary, responsive, rounded, small, title,
  isSolid = contained && !outlined, // eslint-disable-line
  ...inherit
}) => (
  <Touchable
    disabled={disabled || !onPress}
    onPress={onPress}
    style={[styles.touchable, rounded && styles.rounded, inherit.style]}
  >
    <View
      style={[
        styles.container,
        STYLE.BUTTON_REGULAR,
        // -- Layout
        small && STYLE.BUTTON_SMALL,
        !small && responsive && LAYOUT.STYLE.BUTTON.CONTAINER,
        rounded && styles.rounded,
        ((!title && !children) || (!contained && !outlined)) && styles.squared,

        // -- Color
        (isSolid && !primary && !accent) && { backgroundColor: color || TEXT_LIGHTEN },
        isSolid && primary && styles.primary,
        isSolid && accent && styles.accent,
        isSolid && disabled && { backgroundColor: TEXT_LIGHTEN },
        outlined && styles.outlined,
        outlined && { borderColor: color || TEXT_LIGHTEN },
        disabled && styles.disabled,
      ]}
    >
      { activity && <Activity color={isSolid ? WHITE : color || TEXT_LIGHTEN} type="small" /> }
      { icon && !activity && <Icon value={icon} /> }
      { title
        && (
        <Text
          semibold
          color={isSolid ? WHITE : color || TEXT_LIGHTEN}
          style={[
            small // eslint-disable-line
              ? styles.textSmall
              : responsive ? LAYOUT.STYLE.TEXT.SMALL : styles.text,
            (activity || icon) && styles.textMarginLeft,
          ]}
        >
          {title}
        </Text>
        ) }
      { children }
    </View>
  </Touchable>
);

Button.propTypes = {
  accent: bool,
  activity: bool,
  children: node,
  contained: bool,
  color: string,
  disabled: bool,
  icon: string,
  onPress: func,
  outlined: bool,
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
  contained: true,
  color: undefined,
  disabled: false,
  icon: undefined,
  onPress: undefined,
  outlined: false,
  primary: false,
  responsive: false,
  rounded: false,
  small: false,
  title: undefined,
};

export default Button;
