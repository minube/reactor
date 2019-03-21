import { bool, string } from 'prop-types';
import { Animated, View } from 'react-native';
import React, { PureComponent } from 'react';
import Text from '../Text';
import styles from './Loader.style';


export default class Loader extends PureComponent {
  static propTypes = {
    color: string,
    large: bool,
    text: string,

  };

  static defaultProps = {
    color: undefined,
    large: false,
    text: undefined,
  };

  state = {
    dotsOpacities: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)],
    duration: 300,
  };

  constructor(props) {
    super(props);

    this.animationState = {
      targetOpacity: 1,
      animated: true,
    };
  }

  componentDidMount() {
    const { _animation } = this;
    _animation(0);
  }

  componentWillUnmount() {
    this.animationState.animated = false;
  }

  _animation = (initialDot) => {
    const { _animation, animationState, state: { dotsOpacities, duration } } = this;

    if (!animationState.animated) return;
    const min = 0;
    let dot = initialDot;

    if (dot >= dotsOpacities.length) {
      dot = 0;
      animationState.targetOpacity = animationState.targetOpacity === min ? 1 : min;
    }

    const nextDot = dot + 1;

    Animated.timing(dotsOpacities[dot], {
      toValue: animationState.targetOpacity,
      duration,
    }).start(() => _animation(nextDot));
  }

  render() {
    const {
      props: {
        text, color, large,
      },
      state: { dotsOpacities },
    } = this;

    return (
      <View style={styles.container}>
        { text && (
          <Text
            color={color}
            style={[
              styles.regular,
              large && styles.large,
            ]}
          >
            {text}
          </Text>
        )}
        { dotsOpacities.map(dotOpacity => (
          <Animated.Text style={[{ opacity: dotOpacity }]}>
            <Text>{' '}</Text>
            <Text
              color={color}
              style={[
                styles.regular,
                large && styles.large,
              ]}
            >
            .
            </Text>
          </Animated.Text>
        ))}
      </View>
    );
  }
}
