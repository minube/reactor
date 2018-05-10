import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import styles from './Viewport.style';

const MOTION_DURATION = 500;

class Viewport extends PureComponent {
  state = {
    height: LAYOUT.VIEWPORT.H,
    width: LAYOUT.VIEWPORT.W,
  }

  _onLayout = ({ nativeEvent: { layout: { height, width } } }) => {
    this.setState({ height, width });
  }

  _onScroll = ({ nativeEvent: { contentOffset: { y } } }) => {
    const { props: { onScroll } } = this;
    onScroll(y);
  }

  render() {
    const {
      _onLayout, _onScroll,
      props: {
        children, onBack, onScroll, scroll, style, styleContent, visible,
      },
      state: { height, width },
    } = this;
    const styleFlatten = StyleSheet.flatten([styles.content, styleContent]);
    const { VIEWPORT: { LANDSCAPE } } = LAYOUT;

    return (
      <Motion
        duration={MOTION_DURATION / 2}
        style={StyleSheet.flatten([styles.container, { height, width }, style])}
        timeline={[{ property: 'translateX', value: visible ? 0 : width }]}
        type="timing"
      >
        { scroll
          ?
            <ScrollView
              onLayout={LANDSCAPE ? _onLayout : undefined}
              onScroll={onScroll ? _onScroll : undefined}
              scrollEventThrottle={onScroll ? 16 : undefined}
              style={styleFlatten}
            >
              {children}
            </ScrollView>
          :
            <View onLayout={LANDSCAPE ? _onLayout : undefined} style={styleFlatten}>{children}</View> }

        { onBack &&
          <Motion
            delay={MOTION_DURATION}
            timeline={[{ property: 'scale', value: visible ? 1 : 0 }]}
            style={styles.buttonBack}
          >
            <Button icon="left" responsive onPress={onBack} />
          </Motion> }
      </Motion>
    );
  }
}

Viewport.propTypes = {
  children: node,
  onBack: func,
  onScroll: func,
  scroll: bool,
  style: oneOfType([array, number, object]),
  styleContent: oneOfType([array, number, object]),
  visible: bool,
};

Viewport.defaultProps = {
  children: undefined,
  onBack: undefined,
  onScroll: undefined,
  scroll: true,
  style: [],
  styleContent: [],
  visible: true,
};

export default Viewport;
