import { array, bool, func, node, number, object, oneOfType, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import Text from '../Text';
import styles from './Dialog.style';

const IS_WEB = Platform.OS === 'web';
const { COLOR: { WHITE } } = THEME;

class Dialog extends PureComponent {
  static propTypes = {
    background: bool,
    children: node,
    highlight: bool,
    onClose: func,
    style: oneOfType([array, number, object]),
    styleContainer: oneOfType([array, number, object]),
    title: string,
    visible: bool,
  };

  static defaultProps = {
    background: true,
    children: undefined,
    highlight: undefined,
    onClose: undefined,
    style: [],
    styleContainer: [],
    title: undefined,
    visible: false,
  };

  state = {
    scroll: false,
  };

  _onScroll = () => {
    this.setState({ scroll: true });
  }

  render() {
    const {
      _onScroll,
      props: {
        background, children, highlight, onClose, style, styleContainer, title, visible,
      },
      state: { scroll },
    } = this;
    const { VIEWPORT: { H, PORTRAIT } } = LAYOUT;

    return (
      <Motion
        pointerEvents={((background || !IS_WEB) && visible) ? 'auto' : 'none'}
        style={[styles.container, background && styles.background, styleContainer]}
        timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
      >
        <Motion
          delay={250}
          duration={250}
          pointerEvents="auto"
          type="timing"
          style={[
            styles.frame,
            {
              maxHeight: PORTRAIT ? '100%' : '66%',
              minWidth: PORTRAIT ? '66%' : '33%',
            },
            style,
          ]}
          timeline={[{ property: 'translateY', value: visible ? 0 : H }]}
        >
          <View>
            { onClose &&
              <Button
                contained={false}
                icon={highlight ? 'close' : 'closeDark'}
                onPress={onClose}
                style={styles.button}
              /> }
            { title &&
              <Text bold style={styles.title} color={highlight ? WHITE : undefined}>{title}</Text> }
            <ScrollView onScroll={_onScroll} style={[styles.children, scroll && styles.scroll]}>
              {children}
            </ScrollView>
          </View>
        </Motion>
      </Motion>);
  }
}

export default Dialog;
