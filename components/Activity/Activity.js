import { string } from 'prop-types';
import { Animated, View } from 'react-native';
import React, { PureComponent } from 'react';
import styles from './Activity.style';

import { THEME } from '../../common';

const { COLOR, MOTION: { DURATION } } = THEME;

export default class Loader extends PureComponent {
  static propTypes = {
    color: string,
    size: string,
  };

  static defaultProps = {
    color: COLOR.BASE,
    size: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      dotsOpacities: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)],
      duration: DURATION,
    };

    this.animationState = {
      targetOpacity: 1,
      animated: true,
    };
  }

  componentDidMount() {
    const { animate } = this;
    animate(0);
  }

  componentWillUnmount() {
    this.animationState.animated = false;
  }

  animate = (initialDot) => {
    const { animate, animationState, state: { dotsOpacities, duration } } = this;

    if (!animationState.animated) return;
    const min = 0;
    const max = 1;
    let dot = initialDot;

    if (dot >= dotsOpacities.length) {
      dot = 0;
      animationState.targetOpacity = animationState.targetOpacity === min ? max : min;
    }

    const nextDot = dot + 1;

    Animated.timing(dotsOpacities[dot], {
      toValue: animationState.targetOpacity,
      duration,
    }).start(() => animate(nextDot));
  }

  render() {
    const { props: { color, size, ...inherit }, state: { dotsOpacities } } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        { dotsOpacities.map(dotOpacity => (
          <Animated.View
            key="dot"
            style={[styles.dot, styles[size], { backgroundColor: color, opacity: dotOpacity }]}
          />
        ))}
      </View>
    );
  }
}
