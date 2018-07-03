import {
  arrayOf, bool, node, shape, string, number,
} from 'prop-types';
import { createElement, PureComponent } from 'react';
import { Animated, Platform, View as ViewNative } from 'react-native';

import { SHAPE } from '../../common';
import buildStyle from './modules/buildStyle';

class Motion extends PureComponent {
  static propTypes = {
    children: node,
    delay: number,
    disabled: bool,
    duration: number,
    timeline: arrayOf(shape(SHAPE.MOTION)),
    type: string,
    useNativeDriver: bool,
  };

  static defaultProps = {
    children: undefined,
    delay: 0,
    disabled: false,
    duration: 500,
    timeline: undefined,
    type: 'spring',
    useNativeDriver: Platform.OS === 'web',
  };

  constructor(props) {
    super(props);

    const { useNativeDriver, timeline = [] } = props;
    const state = {};

    if (!props.useNativeDriver) {
      timeline.forEach((key) => {
        state[key.property] = new Animated.Value(useNativeDriver ? 0 : key.value);
      });
    }

    this.state = { ...state };
  }

  componentWillReceiveProps({ disabled = this.props.disabled, useNativeDriver = this.props.useNativeDriver, ...nextProps }) { // eslint-disable-line
    if (disabled || useNativeDriver) return;
    const { props, state = {} } = this;
    const {
      delay = props.delay, duration = props.duration, timeline = props.timeline, type = props.type,
    } = nextProps;

    const motions = timeline.map(key => (
      Animated[type](state[key.property], { toValue: key.value, delay, duration }).start()));
    Animated.parallel(motions).start();
  }

  render() {
    const {
      children, disabled, useNativeDriver, ...inherit
    } = this.props;

    const props = { style: [inherit.style, !disabled && buildStyle(this)] };
    if (inherit.pointerEvents) props.pointerEvents = inherit.pointerEvents;

    return createElement(
      !disabled && useNativeDriver ? ViewNative : Animated.View,
      props,
      children,
    );
  }
}

export default Motion;
