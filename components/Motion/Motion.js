import { array, bool, node, object, oneOfType, string, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Platform, StyleSheet, View as ViewNative } from 'react-native';

const SPRING = 'spring';
const SPRING_BEZIER = 'cubic-bezier(0.175, 0.885, 0.160, 1.105)';
const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY'];

class Motion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: new Animated.Value(props.useNativeDriver ? 0 : props.value),
    };
  }

  componentWillReceiveProps({
    delay = this.props.delay,
    disabled = this.props.disabled,
    duration = this.props.duration,
    type = this.props.type,
    useNativeDriver = this.props.useNativeDriver,
    value = this.props.duration || 0,
  }) {
    if (!disabled && !useNativeDriver && value !== this.props.value) {
      Animated[type](this.state.value, { toValue: value, delay, duration }).start();
    }
  }

  render() {
    const {
      props: {
        children, delay, disabled, duration, property, style, type, useNativeDriver,
      },
      state: { value },
    } = this;
    const View = !disabled && useNativeDriver ? ViewNative : Animated.View;
    const isTransform = TRANSFORM_PROPERTIES.includes(property);
    const transitionValue = useNativeDriver ? this.props.value : value;
    const transitionProperty = isTransform ? 'transform' : property;

    const styleMotion = !disabled
      ?
      StyleSheet.flatten([
        property && useNativeDriver && {
          transitionProperty,
          transitionDelay: `${delay}ms`,
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: type === SPRING ? SPRING_BEZIER : undefined,
        },
        property && { [transitionProperty]: isTransform ? [{ [property]: transitionValue }] : transitionValue },
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
  property: string,
  style: oneOfType([array, number, object]),
  type: string,
  useNativeDriver: bool,
  value: number,
};

Motion.defaultProps = {
  children: undefined,
  delay: 0,
  disabled: false,
  duration: 500,
  property: undefined,
  style: [],
  type: SPRING,
  useNativeDriver: Platform.OS === 'web',
  value: 0,
};

export default Motion;
