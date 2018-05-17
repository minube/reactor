import { array, arrayOf, bool, node, object, oneOfType, shape, string, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Platform, StyleSheet, View as ViewNative } from 'react-native';

import { SHAPE } from '../../common';
import buildStyle from './modules/buildStyle';

class Motion extends PureComponent {
  constructor(props) {
    super(props);

    const { useNativeDriver, timeline = [] } = props;
    const state = {};
    timeline.forEach((key) => {
      state[key.property] = new Animated.Value(useNativeDriver ? 0 : key.value);
    });

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
      children, disabled, style, useNativeDriver,
    } = this.props;
    const View = !disabled && useNativeDriver ? ViewNative : Animated.View;

    return (
      <View style={StyleSheet.flatten([style, !disabled && buildStyle(this)])}>
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
  type: 'spring',
  useNativeDriver: Platform.OS === 'web',
};

export default Motion;
