import { array, bool, func, node, number, oneOfType, string } from 'prop-types';
import React, { Component } from 'react';
import { Animated, Dimensions, ScrollView, Text, View } from 'react-native';

import { THEME } from '../../common';
import { Button } from '../';
import styles from './Dialog.style';

const { COLOR } = THEME;

class Dialog extends Component {
  constructor(props) {
    super(props);

    const { height } = Dimensions.get('window');

    this.state = {
      opacity: new Animated.Value(props.visible ? 1 : 0),
      bottom: new Animated.Value(props.visible ? 0 : -height),
      scroll: false,
    };
    this._onScroll = this._onScroll.bind(this);
  }

  componentWillReceiveProps({ visible }) {
    const { bottom, opacity } = this.state;
    const { height } = Dimensions.get('window');

    Animated.parallel([
      Animated.spring(opacity, { toValue: visible ? 1 : 0, useNativeDriver: true }),
      Animated.spring(bottom, { toValue: visible ? 0 : -height }),
    ]).start();
  }

  _onScroll() {
    this.setState({ scroll: true });
  }

  render() {
    const {
      _onScroll,
      props: {
        children, onClose, onSubmit, style, title, visible,
      },
      state: {
        bottom, opacity, scroll,
      },
    } = this;

    return (
      <Animated.View
        pointerEvents={visible ? 'auto' : 'none'}
        style={[styles.container, { opacity }]}
      >
        <Animated.View style={[styles.frame, style, { bottom }]}>
          { title && <Text style={styles.title}>{title}</Text> }
          <ScrollView onScroll={_onScroll} style={[styles.content, scroll && styles.scroll]}>
            {children}
          </ScrollView>
          <View style={styles.footer}>
            <Button title="Close" onPress={onClose} />
            { onSubmit && <Button color={COLOR.PRIMARY} title="Submit" onPress={onClose} /> }
          </View>
        </Animated.View>
      </Animated.View>);
  }
}

Dialog.propTypes = {
  children: node,
  onClose: func,
  onSubmit: func,
  style: oneOfType([array, number]),
  title: string,
  visible: bool,
};

Dialog.defaultProps = {
  children: undefined,
  onClose() {},
  onSubmit: undefined,
  style: [],
  title: undefined,
  visible: false,
};

export default Dialog;
