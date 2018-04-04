import { array, bool, func, node, number, object, oneOfType, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Dimensions, StyleSheet, ScrollView, View } from 'react-native';

import { THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Dialog.style';

const { COLOR } = THEME;

class Dialog extends PureComponent {
  constructor(props) {
    super(props);

    const { height } = Dimensions.get('window');

    this.state = {
      opacity: new Animated.Value(props.visible ? 1 : 0),
      position: new Animated.Value(props.visible ? 0 : -height),
      scroll: false,
    };
  }

  componentWillReceiveProps({ visible }) {
    const { position, opacity } = this.state;
    const { height } = Dimensions.get('window');

    Animated.parallel([
      Animated.spring(opacity, { toValue: visible ? 1 : 0 }),
      Animated.spring(position, { toValue: visible ? 0 : -height }),
    ]).start();
  }

  _onScroll = () => {
    this.setState({ scroll: true });
  }

  render() {
    const {
      _onScroll,
      props: {
        background, children, onClose, onSubmit, style, styleContainer, title, visible,
      },
      state: {
        position, opacity, scroll,
      },
    } = this;

    return (
      <Animated.View
        pointerEvents={visible && background ? 'auto' : 'none'}
        style={StyleSheet.flatten([styles.container, background && styles.background, styleContainer, { opacity }])}
      >
        <Animated.View pointerEvents="auto" style={StyleSheet.flatten([styles.frame, style, { bottom: position }])}>
          { title && <Text bold style={styles.title}>{title}</Text> }
          <ScrollView onScroll={_onScroll} style={StyleSheet.flatten([styles.children, scroll && styles.scroll])}>
            {children}
          </ScrollView>
          { (onClose || onSubmit) &&
            <View style={styles.buttons}>
              <Button title="Close" onPress={onClose} />
              { onSubmit && <Button color={COLOR.PRIMARY} title="Submit" onPress={onClose} /> }
            </View> }
        </Animated.View>
      </Animated.View>);
  }
}

Dialog.propTypes = {
  background: bool,
  children: node,
  onClose: func,
  onSubmit: func,
  style: oneOfType([array, number, object]),
  styleContainer: oneOfType([array, number, object]),
  title: string,
  visible: bool,
};

Dialog.defaultProps = {
  background: true,
  children: undefined,
  onClose: undefined,
  onSubmit: undefined,
  style: [],
  styleContainer: [],
  title: undefined,
  visible: false,
};

export default Dialog;
