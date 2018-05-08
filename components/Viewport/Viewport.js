import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import styles from './Viewport.style';

const MOTION_DURATION = 500;

class Viewport extends PureComponent {
  _onScroll = ({ nativeEvent: { contentOffset: { y } } }) => {
    const { props: { onScroll } } = this;
    if (onScroll) onScroll(y);
  }

  render() {
    const {
      _onScroll,
      props: {
        children, onBack, onScroll, scroll, style, styleContent, visible,
      },
    } = this;
    const { VIEWPORT: { LANDSCAPE, H: height, W: width } } = LAYOUT;
    const Content = scroll ? ScrollView : View;

    return (
      <Motion
        _disabled={LANDSCAPE}
        duration={MOTION_DURATION / 2}
        style={StyleSheet.flatten([styles.container, { height, width }, style])}
        timeline={[{ property: 'translateX', value: visible ? 0 : width }]}
        type="timing"
      >
        <Content
          onScroll={scroll && onScroll ? _onScroll : undefined}
          scrollEventThrottle={scroll && onScroll ? 16 : undefined}
          style={StyleSheet.flatten([styles.content, styleContent])}
        >
          {children}
        </Content>
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
