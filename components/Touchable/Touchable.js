import {
  func, node, number, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Animated, Easing, Platform, TouchableNativeFeedback, TouchableWithoutFeedback, View,
} from 'react-native';

import { ENV } from '../../common';

import Ripple from './components/Ripple';
import styles from './Touchable.style';

const { IS_NATIVE } = ENV;
const ANIMATION = {
  toValue: 1,
  easing: Easing.out(Easing.ease),
  duration: 400,
  useNativeDriver: IS_NATIVE,
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
    rippleColor: undefined,
  };

  state = {
    width: 0,
    height: 0,
    ripples: [],
    mask: new Animated.Value(0),
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
      state: {
        mask, ripples, width, height,
      },
    } = this;

    const { locationX: x, locationY: y } = event.nativeEvent;
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

    Animated.timing(mask, { ...ANIMATION, delay: ANIMATION.duration / 4, toValue: 0.25 }).start();
    Animated.timing(ripple.progress, ANIMATION).start(onAnimationEnd);
    this.setState({ ripples: [...ripples, ripple] });
  }

  _onPressOut = () => {
    const { state: { mask } } = this;
    Animated.timing(mask, { ...ANIMATION, toValue: 0 }).start();
  }

  render() {
    const {
      _onPressIn, _onPressOut, _onLayout,
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
        [ENV.IS_MOBILE_WEB ? 'onTouchStart' : 'onPress']: onPress,
      };
    }

    return (
      <TouchableWithoutFeedback {...events}>
        <View style={inherit.style} pointerEvents={onPress ? 'box-only' : undefined}>
          {children}
          <View style={[styles.container, containerBorderRadius && { borderRadius: containerBorderRadius }]}>
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

export default ({ ...inherit }) => (
  Platform.OS !== 'android'
    ? <Touchable {...inherit} />
    : <TouchableNativeFeedback useForeground {...inherit} />
);
