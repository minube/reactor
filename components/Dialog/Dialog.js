import { array, bool, func, node, number, object, oneOfType, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Platform, ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './Dialog.style';

const { COLOR } = THEME;
const isWeb = Platform.OS === 'web';

class Dialog extends PureComponent {
  constructor(props) {
    super(props);

    const { VIEWPORT: { H } } = LAYOUT;

    this.state = {
      opacity: new Animated.Value(props.visible ? 1 : 0),
      position: new Animated.Value(props.visible ? 0 : -H),
      scroll: false,
    };
  }

  componentWillReceiveProps({ visible }) {
    const { position, opacity } = this.state;
    const { VIEWPORT: { H } } = LAYOUT;

    Animated.parallel([
      Animated.spring(opacity, { toValue: visible ? 1 : 0 }),
      Animated.spring(position, { toValue: visible ? 0 : -H }),
    ]).start();
  }

  _onScroll = () => {
    this.setState({ scroll: true });
  }

  render() {
    const {
      _onScroll,
      props: {
        background, children, highlight, onClose, onSubmit, style, styleContainer, title, visible,
      },
      state: {
        position, opacity, scroll,
      },
    } = this;
    const { VIEWPORT: { PORTRAIT } } = LAYOUT;

    return (
      <Animated.View
        pointerEvents={visible && (background || !isWeb) ? 'auto' : 'none'}
        style={[styles.container, background && styles.background, styleContainer, { opacity }]}
      >
        <Animated.View
          pointerEvents="auto"
          style={[
            styles.frame,
            {
              bottom: position,
              maxHeight: PORTRAIT ? '100%' : '66%',
              minWidth: PORTRAIT ? '66%' : '33%',
            },
            style,
          ]}
        >
          { onClose &&
            <Touchable onPress={onClose} raised style={styles.iconClose}>
              <Icon value={highlight ? 'close' : 'closeDark'} />
            </Touchable> }
          { title && <Text bold style={styles.title}>{title}</Text> }
          <ScrollView onScroll={_onScroll} style={[styles.children, scroll && styles.scroll]}>
            {children}
            { onSubmit &&
              <View style={styles.buttons}>
                <Button color={COLOR.PRIMARY} title="Submit" onPress={onClose} />
              </View> }
          </ScrollView>
        </Animated.View>
      </Animated.View>);
  }
}

Dialog.propTypes = {
  background: bool,
  children: node,
  highlight: bool,
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
  highlight: undefined,
  onClose: undefined,
  onSubmit: undefined,
  style: [],
  styleContainer: [],
  title: undefined,
  visible: false,
};

export default Dialog;
