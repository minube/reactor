import { array, bool, node, oneOfType, string, number } from 'prop-types';
import React, { Component } from 'react';
import { Animated, Platform, StyleSheet, View as ViewNative } from 'react-native';

const isBrowser = Platform.OS === 'web';
const SPRING = 'spring';

class Motion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Animated.Value(props.value || 0),
    };
  }

  componentWillReceiveProps({
    useNativeDriver = this.props.useNativeDriver,
    type = this.props.type,
    delay = this.props.delay,
    duration = this.props.duration,
    value = this.props.duration || 0,
  }) {
    if (!useNativeDriver) Animated[type](this.state.value, { toValue: value, delay, duration }).start();
  }

  render() {
    const {
      props: {
        children, delay, duration, property, style, useNativeDriver,
      },
      state: { value },
    } = this;
    const View = useNativeDriver ? ViewNative : Animated.View;

    return (
      <View
        style={StyleSheet.flatten([
          style,
          useNativeDriver && {
            transitionProperty: property,
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: SPRING ? 'easeInOut' : undefined,
          },
          { [property]: useNativeDriver ? this.props.value : value },
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
  style: oneOfType([array, number]),
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
  useNativeDriver: isBrowser,
  value: undefined,
};

export default Motion;
