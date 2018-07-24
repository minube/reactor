import { node, number, string } from 'prop-types';
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
    rippleColor: string,
  };

  static defaultProps = {
    children: undefined,
    containerBorderRadius: undefined,
    rippleColor: undefined,
  };

  state = {
    width: 0,
    height: 0,
    ripples: [],
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

  _onPressIn = ({ nativeEvent }) => {
    const { onAnimationEnd, state: { ripples, width, height } } = this;
    const { locationX: x, locationY: y } = nativeEvent;

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

  render() {
    const {
      _onPressIn, _onLayout,
      props: {
        children, containerBorderRadius, rippleColor, ...inherit
      },
      state: { ripples },
    } = this;

    return (
      <TouchableWithoutFeedback {...inherit} onLayout={_onLayout} onPressIn={inherit.onPress ? _onPressIn : undefined}>
        <View style={inherit.style} pointerEvents="box-only">
          {children}
          <View style={[styles.container, containerBorderRadius && { borderRadius: containerBorderRadius }]}>
            { ripples.map(props => <Ripple color={rippleColor} {...props} />)}
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
