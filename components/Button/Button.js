import {
  bool, func, node, number, oneOfType, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Activity from '../Activity';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles, { REGULAR_SIZE } from './Button.style';
import calcColor from './modules/calcColor';

const { COLOR: { BASE, TEXT_LIGHTEN, WHITE } } = THEME;

const Button = ({
  activity, children, color, contained, disabled, icon, large, noPadding, onPress, outlined,
  responsive, rounded, shadow, small, title,
  isSolid = contained && !outlined, // eslint-disable-line
  rippleColor = isSolid ? undefined : color, // eslint-disable-line
  ...inherit
}) => (
  <View style={inherit.style}>
    <Touchable
      containerBorderRadius={rounded ? REGULAR_SIZE / 2 : undefined}
      onPress={disabled ? undefined : onPress}
      rippleColor={isSolid && color === WHITE ? BASE : rippleColor || WHITE}
      style={[
        styles.touchable,
        rounded && styles.rounded,
        isSolid && shadow && !disabled && styles.shadow,
      ]}
    >
      <View
        style={[
          styles.container,
          styles.regular,
          styles.row,
          // -- Layout
          small && styles.small,
          responsive && !small && !LAYOUT.VIEWPORT.REGULAR && !LAYOUT.VIEWPORT.LARGE && styles.small,
          large && styles.large,
          rounded && styles.rounded,
          (!title && !children && !activity) && styles.noPadding,
          noPadding && styles.noPadding,
          // -- Color
          isSolid && { backgroundColor: color || TEXT_LIGHTEN },
          isSolid && disabled && styles.disabled,
          outlined && styles.outlined,
          outlined && { borderColor: color || TEXT_LIGHTEN },
          !isSolid && disabled && styles.disabledOpacity,
        ]}
      >
        { icon && !activity && <Icon value={icon} size={small ? 16 : inherit.iconSize} /> }
        <View style={[styles.row, icon && (title || children) && styles.textMarginLeft]}>
          { title
            && (
            <Text
              color={calcColor({ isSolid, color })} // eslint-disable-line
              style={[
                styles.text,
                small && styles.textSmall,
                responsive && !small && styles.textSmall,
              ]}
            >
              {title}
            </Text>
            ) }
          { children }
        </View>
        { activity && <Activity color={calcColor({ isSolid, color })} style={styles.activity} /> }
      </View>
    </Touchable>
  </View>
);

Button.propTypes = {
  activity: bool,
  children: node,
  contained: bool,
  color: string,
  disabled: bool,
  icon: oneOfType([number, string]),
  large: bool,
  noPadding: bool,
  onPress: func,
  outlined: bool,
  responsive: bool,
  rounded: bool,
  shadow: bool,
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
  large: false,
  noPadding: false,
  onPress: undefined,
  outlined: false,
  responsive: false,
  rounded: false,
  shadow: false,
  small: false,
  title: undefined,
};

export default Button;
