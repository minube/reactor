import { bool, func, node } from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import { LAYOUT } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import styles from './Viewport.style';

const MOTION_DURATION = 500;

class Viewport extends PureComponent {
  state = {
    scroll: 0,
  }

  _onScroll = () => {
    const { props: { onScroll } } = this;
    if (onScroll) onScroll();
  }

  render() {
    const {
      _onScroll,
      props: { children, onBack, visible },
      state: { scroll },
    } = this;

    const { VIEWPORT: { H, W } } = LAYOUT;

    return (
      <Motion
        disabled={false}
        duration={MOTION_DURATION}
        style={styles.container}
        timeline={[
          { property: 'translateX', value: visible ? 0 : W },
        ]}
        type="timing"
      >
        <Motion
          delay={MOTION_DURATION / 2}
          style={styles.content}
          timeline={[
            { property: 'opacity', value: visible ? 1 : 0 },
            { property: 'translateY', value: visible ? 0 : H },
          ]}
        >
          <ScrollView onScroll={_onScroll}>
            {children}
          </ScrollView>
        </Motion>
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
  visible: bool,
};

Viewport.defaultProps = {
  children: undefined,
  onBack: undefined,
  onScroll: undefined,
  visible: true,
};

export default Viewport;
