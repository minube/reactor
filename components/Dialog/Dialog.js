import {
  array, bool, func, node, number, object, oneOfType, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import {
  KeyboardAvoidingView, SafeAreaView, ScrollView, View,
} from 'react-native';

import { ENV, LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Motion from '../Motion';
import Text from '../Text';
import styles from './Dialog.style';

const { IS_NATIVE } = ENV;
const { COLOR, MOTION } = THEME;

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
        delay={visible ? 0 : MOTION.DURATION}
        pointerEvents={((background || IS_NATIVE) && visible) ? 'auto' : 'none'}
        style={styles.container}
        timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
      >
        <SafeAreaView style={[styles.safeArea, background && styles.background, styleContainer]}>
          <KeyboardAvoidingView
            behavior={IS_NATIVE ? 'padding' : undefined}
            style={[
              {
                maxHeight: PORTRAIT ? '100%' : '90%',
                minWidth: PORTRAIT ? 320 : '33%',
                maxWidth: PORTRAIT ? '100%' : '66%',
                position: 'absolute',
              },
              { backgroundColor: COLOR.TRANSPARENT },
            ]}
          >
            <Motion
              delay={visible ? MOTION.DURATION : 0}
              duration={MOTION.DURATION}
              pointerEvents="auto"
              type="timing"
              timeline={[{ property: 'translateY', value: translateY }]}
            >
              <View style={[styles.frame, style]}>
                <View style={styles.header}>
                  { title && (
                    <Text
                      color={highlight ? COLOR.WHITE : undefined}
                      headline
                      level={6}
                      numberOfLines={1}
                      style={styles.title}
                    >
                      {title}
                    </Text>
                  )}
                  { onClose && (
                    <Button
                      contained={false}
                      color={highlight ? undefined : COLOR.TEXT}
                      icon={highlight ? 'closeContrast' : 'close'}
                      onPress={onClose}
                      rounded
                    />
                  )}
                </View>
                <ScrollView onScroll={title ? _onScroll : undefined} style={[styles.children, scroll && styles.scroll]}>
                  {children}
                </ScrollView>
              </View>
            </Motion>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Motion>
    );
  }
}
