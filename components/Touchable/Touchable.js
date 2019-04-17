import {
  func, node, number, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Animated, Easing, TouchableWithoutFeedback, View,
} from 'react-native';

import { THEME } from '../../common';

import Ripple from './components/Ripple';
import styles from './Touchable.style';

const { COLOR } = THEME;
const ANIMATION = {
  toValue: 1,
  easing: Easing.out(Easing.ease),
  duration: 400,
  useNativeDriver: true,
};

class Touchable extends PureComponent {
  mounted = false;

  static propTypes = {
    children: node,
    containerBorderRadius: number,
    onPress: func,
    rippleColor: string,
  };

  static defaultProps = {
    children: undefined,
    containerBorderRadius: undefined,
    onPress: undefined,
    rippleColor: COLOR.BASE,
  };

  state = {
    height: 0,
    mask: new Animated.Value(0),
    ripples: [],
    width: 0,
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onAnimationEnd = () => {
    if (this.mounted) this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
  }

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
  }

  _onPressIn = (event) => {
    const {
      onAnimationEnd,
      state: {
        mask, ripples, width, height,
      },
    } = this;
    const { locationX: x, locationY: y } = event.nativeEvent;

    Animated.timing(mask, { ...ANIMATION, delay: ANIMATION.duration / 4, toValue: 0.25 }).start();

    const w = 0.5 * width;
    const h = 0.5 * height;
    const offsetX = Math.abs(w - x);
    const offsetY = Math.abs(h - y);
    const ripple = {
      key: (new Date()).getTime(),
      progress: new Animated.Value(0),
      range: Math.sqrt(((w + offsetX) ** 2) + ((h + offsetY) ** 2)),
      x,
      y,
    };

    Animated.timing(ripple.progress, ANIMATION).start(onAnimationEnd);
    this.setState({ ripples: [...ripples, ripple] });
  }

  _onPressOut = () => {
    const { state: { mask } } = this;

    Animated.timing(mask, { ...ANIMATION, toValue: 0 }).start();
  }

  _onPress = (event) => {
    const { props: { onPress } } = this;

    event.preventDefault();
    onPress(event);
  }

  render() {
    const {
      _onPressIn, _onPress, _onPressOut, _onLayout,
      props: {
        children, containerBorderRadius, onPress, rippleColor, ...inherit
      },
      state: {
        mask, width, height, ripples = [],
      },
    } = this;
    const events = onPress
      ? {
        onLayout: _onLayout, onPressIn: _onPressIn, onPress: _onPress, onPressOut: _onPressOut,
      }
      : {};

    return (
      <TouchableWithoutFeedback {...events}>
        <View
          pointerEvents={onPress ? 'box-only' : 'none'}
          style={[styles.container, inherit.style]}
        >
          {children}
          <View style={[styles.ripples, containerBorderRadius && { borderRadius: containerBorderRadius }]}>
            { ripples.map(props => <Ripple color={rippleColor} {...props} />)}
            <Animated.View
              style={[
                styles.mask,
                { opacity: mask, height, width },
                rippleColor && { backgroundColor: rippleColor },
              ]}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Touchable;
