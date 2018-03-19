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
    useNativeDriver = this.props.useNativeDriver,
    type = this.props.type,
    delay = this.props.delay,
    duration = this.props.duration,
    value = this.props.duration || 0,
  }) {
    if (!useNativeDriver && value !== this.props.value) {
      Animated[type](this.state.value, { toValue: value, delay, duration }).start();
    }
  }

  render() {
    const {
      props: {
        children, delay, duration, property, style, type, useNativeDriver,
      },
      state: { value },
    } = this;
    const View = useNativeDriver ? ViewNative : Animated.View;
    const isTransform = TRANSFORM_PROPERTIES.includes(property);
    const transitionValue = useNativeDriver ? this.props.value : value;
    const transitionProperty = isTransform ? 'transform' : property;

    return (
      <View
        style={StyleSheet.flatten([
          style,
          useNativeDriver && {
            transitionProperty,
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: type === SPRING ? SPRING_BEZIER : undefined,
          },
          { [transitionProperty]: isTransform ? [{ [property]: transitionValue }] : transitionValue },
        ])}
      >
        { children }
      </View>
    );
  }
}

Motion.propTypes = {
  children: node,
  delay: number,
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
  duration: 500,
  property: 'opacity',
  style: [],
  type: SPRING,
  useNativeDriver: Platform.OS === 'web',
  value: 0,
};

export default Motion;
