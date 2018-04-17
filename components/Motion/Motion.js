import { array, arrayOf, bool, node, object, oneOfType, shape, string, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Platform, StyleSheet, View as ViewNative } from 'react-native';

import { SHAPE } from '../../common';

const SPRING = 'spring';
const SPRING_BEZIER = 'cubic-bezier(0.175, 0.885, 0.160, 1.105)';
const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY'];

const isTransform = prop => TRANSFORM_PROPERTIES.includes(prop);

class Motion extends PureComponent {
  constructor(props) {
    super(props);

    const { useNativeDriver, timeline = [] } = props;
    const state = {};

    timeline.forEach(key => state[key.property] = new Animated.Value(useNativeDriver ? 0 : key.value));

    this.state = { ...state };
  }

  componentWillReceiveProps({
    delay = this.props.delay,
    disabled = this.props.disabled,
    duration = this.props.duration,
    timeline = this.props.timeline,
    type = this.props.type,
    useNativeDriver = this.props.useNativeDriver,
  }) {
    if (disabled || useNativeDriver) return;

    const motions = timeline.map(key =>
      Animated[type](this.state[key.property], { toValue: key.value, delay, duration }).start());
    Animated.parallel(motions).start();
  }

  render() {
    const {
      props: {
        children, delay, disabled, duration, style, type, useNativeDriver, timeline = [],
      },
      state,
    } = this;

    const View = !disabled && useNativeDriver ? ViewNative : Animated.View;

    let values = {};
    timeline.forEach((key) => {
      const v = useNativeDriver ? key.value : state[key.property];

      values = {
        ...values,
        ...(
          isTransform(key.property)
            ? { transform: [{ [key.property]: v }] }
            : { [key.property]: v }
        ),
      };
    });

    const styleMotion = !disabled
      ?
      StyleSheet.flatten([
        useNativeDriver && {
          transitionProperty: Object.keys(values).join(', '),
          transitionDelay: `${delay}ms`,
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: type === SPRING ? SPRING_BEZIER : undefined,
        },
        values,
      ])
      : undefined;

    return (
      <View style={StyleSheet.flatten([style, styleMotion])}>
        { children }
      </View>
    );
  }
}

Motion.propTypes = {
  children: node,
  delay: number,
  disabled: bool,
  duration: number,
  style: oneOfType([array, number, object]),
  timeline: arrayOf(shape(SHAPE.MOTION)),
  type: string,
  useNativeDriver: bool,
};

Motion.defaultProps = {
  children: undefined,
  delay: 0,
  disabled: false,
  duration: 500,
  style: [],
  timeline: undefined,
  type: SPRING,
  useNativeDriver: Platform.OS === 'web',
};

export default Motion;
