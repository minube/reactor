import { string } from 'prop-types';
import { Animated, View } from 'react-native';
import React, { PureComponent } from 'react';
import styles from './Activity.style';

import { THEME } from '../../common';

const { COLOR, MOTION: { DURATION } } = THEME;

export default class Activity extends PureComponent {
  static propTypes = {
    color: string,
    size: string,
  };

  static defaultProps = {
    color: COLOR.BASE,
    size: undefined,
  };

  mounted = true;

  targetOpacity = 1;

  state = {
    opacities: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)],
  };

  componentWillMount() {
    this.animate(0);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  animate = (initialDot) => {
    if (!this.mounted) return;
    const { animate, state: { opacities } } = this;
    const min = 0;
    const max = 1;
    let { targetOpacity } = this;
    let dot = initialDot;

    if (dot >= opacities.length) {
      dot = 0;
      targetOpacity = targetOpacity === min ? max : min;
    }

    const nextDot = dot + 1;
    Animated.timing(opacities[dot], {
      toValue: targetOpacity,
      duration: DURATION,
    }).start(() => animate(nextDot));
  }

  render() {
    const { props: { color, size, ...inherit }, state: { opacities } } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        { opacities.map((opacity, index) => (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, styles[size], { backgroundColor: color, opacity }]}
          />
        ))}
      </View>
    );
  }
}
