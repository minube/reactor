import {
  array, bool, func, node, number, object, oneOfType, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ENV, LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import Text from '../Text';
import styles from './Dialog.style';

const { IS_WEB } = ENV;
const { COLOR } = THEME;
const MOTION_DURATION = 250;

export default class Dialog extends PureComponent {
  static propTypes = {
    background: bool,
    children: node,
    highlight: bool,
    onClose: func,
    reverse: bool,
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
    reverse: false,
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
        background, children, highlight, reverse, onClose, style, styleContainer, title, visible,
      },
      state: { scroll },
    } = this;
    const { VIEWPORT: { H, PORTRAIT } } = LAYOUT;
    let translateY = 0;
    if (!visible) translateY = reverse ? -H : H;

    return (
      <Motion
        delay={visible ? 0 : MOTION_DURATION}
        pointerEvents={((background || !IS_WEB) && visible) ? 'auto' : 'none'}
        style={[styles.container, background && styles.background, styleContainer]}
        timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
      >
        <Motion
          delay={visible ? MOTION_DURATION : 0}
          duration={MOTION_DURATION}
          pointerEvents="auto"
          type="timing"
          style={[
            styles.frame,
            {
              maxHeight: PORTRAIT ? '100%' : '90%',
              minWidth: PORTRAIT ? '66%' : '33%',
              maxWidth: PORTRAIT ? '100%' : '66%',
            },
            style,
          ]}
          timeline={[{ property: 'translateY', value: translateY }]}
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
              { title && (
                <Text bold style={styles.title} color={highlight ? COLOR.WHITE : undefined}>
                  {title}
                </Text>)}
              { onClose && (
                <Button
                  contained={false}
                  color={highlight ? undefined : COLOR.TEXT}
                  icon={highlight ? 'close' : 'closeDark'}
                  onPress={onClose}
                  rounded
                />)}
            </View>
            <ScrollView onScroll={title ? _onScroll : undefined} style={[styles.children, scroll && styles.scroll]}>
              {children}
            </ScrollView>
          </SafeAreaView>
        </Motion>
      </Motion>);
  }
}
