import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import styles from './Viewport.style';

const MOTION_DURATION = 500;

class Viewport extends PureComponent {
  state = {
    scroll: 0,
  }

  _onScroll = ({ nativeEvent: { contentOffset: { y: scroll } } }) => {
    const { props: { onScroll } } = this;
    this.setState({ scroll });

    if (onScroll) onScroll(scroll);
  }

  render() {
    const {
      _onScroll,
      props: {
        children, onBack, style, styleContent, visible,
      },
      state: { scroll },
    } = this;

    const { VIEWPORT: { H: height, W: width } } = LAYOUT;

    return (
      <Motion
        disabled={false}
        style={StyleSheet.flatten([styles.container, { height, width }, style])}
        timeline={[{ property: 'translateX', value: visible ? 0 : width }]}
        type="timing"
      >
        <Motion
          delay={MOTION_DURATION / 2}
          style={StyleSheet.flatten([styles.content, styleContent])}
          timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
        >
          <ScrollView onScroll={_onScroll}>
            {children}
          </ScrollView>
        </Motion>
        { onBack &&
          <Motion
            delay={MOTION_DURATION}
            timeline={[{ property: 'scale', value: (visible && scroll === 0) ? 1 : 0 }]}
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
  style: oneOfType([array, number, object]),
  styleContent: oneOfType([array, number, object]),
  visible: bool,
};

Viewport.defaultProps = {
  children: undefined,
  onBack: undefined,
  onScroll: undefined,
  style: [],
  styleContent: [],
  visible: true,
};

export default Viewport;
