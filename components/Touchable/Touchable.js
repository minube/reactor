import {
  func, node, number, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Animated, Easing, TouchableWithoutFeedback, View,
} from 'react-native';

import { ENV, THEME } from '../../common';

import Ripple from './components/Ripple';
import styles from './Touchable.style';

const { COLOR } = THEME;
const { IS_NATIVE } = ENV;
const ANIMATION = {
  toValue: 1,
  easing: Easing.out(Easing.ease),
  duration: 400,
  useNativeDriver: IS_NATIVE,
};
let timeoutId;
let epicenter;

class Touchable extends PureComponent {
  mounted = false;

  static propTypes = {
    children: node,
    containerBorderRadius: number,
    onPress: func,
    rippleColor: string,
    rippleDelay: number,
  };

  static defaultProps = {
    children: undefined,
    containerBorderRadius: undefined,
    onPress: undefined,
    rippleColor: COLOR.BASE,
    rippleDelay: 0,
  };

  state = {
    height: 0,
    mask: new Animated.Value(0),
    epicenter: undefined,
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
    if (this.mounted) {
      this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
    }
  }

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
  }

  _onPressIn = (event) => {
    const {
      onAnimationEnd,
      props: { rippleDelay },
      state: {
        mask, ripples, width, height,
      },
    } = this;
    const { locationX: x, locationY: y } = event.nativeEvent;
    epicenter = { x, y };

    Animated.timing(mask, { ...ANIMATION, delay: ANIMATION.duration / 4, toValue: 0.25 }).start();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
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
    }, rippleDelay);
  }

  _onPressOut = (event) => {
    const { props: { rippleDelay }, state: { mask } } = this;
    const { locationX: x, locationY: y } = event.nativeEvent;

    if (rippleDelay > 0) {
      const gapX = (epicenter.x / x);
      const gapY = epicenter.y / y;
      if (gapX < 0.9 || gapX > 1.1 || gapY < 0.9 || gapY > 1.1) clearTimeout(timeoutId);
    }
    Animated.timing(mask, { ...ANIMATION, toValue: 0 }).start();
  }

  _onPress = (event) => {
    const { props: { onPress } } = this;
    event.preventDefault();
    onPress(event);
  }

  render() {
    const {
      _onPress, _onPressIn, _onPressOut, _onLayout,
      props: {
        children, containerBorderRadius, onPress, rippleColor, ...inherit
      },
      state: {
        mask, width, height, ripples = [],
      },
    } = this;
    let events = {};

    if (onPress) {
      events = {
        onLayout: _onLayout,
        onPressIn: _onPressIn,
        onPressOut: _onPressOut,
        onPress: _onPress,
      };
    }

    return (
      <TouchableWithoutFeedback {...events}>
        <View style={[styles.container, inherit.style]} pointerEvents={onPress ? 'box-only' : undefined}>
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
