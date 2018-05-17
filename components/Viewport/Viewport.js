import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { createElement, PureComponent } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';
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
    onScroll({ y });
  }

  render() {
    const {
      _onLayout, _onScroll,
      props: {
        children, onScroll, scroll, style, styleContent, visible,
      },
      state: { height, width },
    } = this;

    return (
      <Motion
        duration={MOTION_DURATION / 2}
        style={StyleSheet.flatten([styles.container, { height, width }, style])}
        timeline={[{ property: 'translateX', value: visible ? 0 : width }]}
        type="timing"
      >
        <SafeAreaView onLayout={LAYOUT.VIEWPORT.LANDSCAPE ? _onLayout : undefined} style={styles.safeArea}>
          { createElement(
              scroll ? ScrollView : View,
              {
                ...(scroll && onScroll ? { onScroll: _onScroll, scrollEventThrottle: 16 } : {}),
                style: StyleSheet.flatten([styles.content, styleContent]),
              },
              children,
            )}
        </SafeAreaView>
      </Motion>
    );
  }
}

Viewport.propTypes = {
  children: node,
  onScroll: func,
  scroll: bool,
  style: oneOfType([array, number, object]),
  styleContent: oneOfType([array, number, object]),
  visible: bool,
};

Viewport.defaultProps = {
  children: undefined,
  onScroll: undefined,
  scroll: true,
  style: [],
  styleContent: [],
  visible: true,
};

export default Viewport;
