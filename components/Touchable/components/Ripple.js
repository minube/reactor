import { number, shape, string } from 'prop-types';
import React from 'react';
import { Animated } from 'react-native';

import styles from './Ripple.style';

const DEFAULTS = {
  OPACITY: 0.3,
  RADIUS: 10,
};

const Ripple = ({
  color, progress, range, x, y,
}) => (
  <Animated.View
    style={[
      styles.ripple,
      {
        top: y - DEFAULTS.RADIUS,
        left: x - DEFAULTS.RADIUS,
        backgroundColor: color,

        transform: [{
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5 / DEFAULTS.RADIUS, range / DEFAULTS.RADIUS],
          }),
        }],

        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [DEFAULTS.OPACITY, 0],
        }),
      },
    ]}
  />
);

Ripple.propTypes = {
  color: string.isRequired,
  progress: shape({}),
  x: number,
  y: number,
  range: number,
};

Ripple.defaultProps = {
  progress: new Animated.Value(0),
  x: 0,
  y: 0,
  range: 0,
};

export default Ripple;
