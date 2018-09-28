import {
  bool, func, node, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Activity from '../Activity';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles, { REGULAR_SIZE } from './Button.style';

const { COLOR: { PRIMARY, SECONDARY, TEXT_LIGHTEN, WHITE } } = THEME;

const Button = ({
  activity, children, color, contained, disabled, icon, onPress, outlined,
  primary, responsive, rounded, secondary, small, title,
  isSolid = contained && !outlined, // eslint-disable-line
  customColor = color || (primary && PRIMARY) || (secondary && SECONDARY) || undefined, // eslint-disable-line
  ...inherit
}) => (
  <Touchable
    containerBorderRadius={rounded ? REGULAR_SIZE / 2 : undefined}
    onPress={disabled ? undefined : onPress}
    rippleColor={isSolid ? undefined : customColor}
    style={[styles.touchable, rounded && styles.rounded, inherit.style]}
  >
    <View
      style={[
        styles.container,
        styles.regular,
        styles.row,
        // -- Layout
        small && styles.small,
        responsive && !small && !LAYOUT.VIEWPORT.REGULAR && !LAYOUT.VIEWPORT.LARGE && styles.small,
        rounded && styles.rounded,
        ((!title && !children) || (!contained && !outlined)) && styles.squared,

        // -- Color
        (isSolid && !primary && !secondary) && { backgroundColor: color || TEXT_LIGHTEN },
        isSolid && primary && styles.primary,
        isSolid && secondary && styles.secondary,
        isSolid && disabled && { backgroundColor: TEXT_LIGHTEN },
        outlined && styles.outlined,
        outlined && { borderColor: customColor || TEXT_LIGHTEN },
        disabled && styles.disabled,
      ]}
    >
      { activity && <Activity color={isSolid ? WHITE : color || TEXT_LIGHTEN} type="small" /> }
      { icon && !activity && <Icon value={icon} /> }
      <View style={[styles.row, (activity || icon) && (title || children) && styles.textMarginLeft]}>
        { title
          && (
          <Text
            color={isSolid ? WHITE : customColor || TEXT_LIGHTEN}
            style={[
              styles.text,
              small && styles.textSmall,
              responsive && !small && styles.textSmall,
              (activity || icon) && styles.textMarginLeft,
            ]}
          >
            {title}
          </Text>
          ) }
        { children }
      </View>
    </View>
  </Touchable>
);

Button.propTypes = {
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
  secondary: bool,
  small: bool,
  title: string,
};

Button.defaultProps = {
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
  secondary: false,
  small: false,
  title: undefined,
};

export default Button;
