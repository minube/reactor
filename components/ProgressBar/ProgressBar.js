import { bool, number } from 'prop-types';
import React, { Component } from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import styles from './ProgressBar.style';

const { COLOR } = THEME;

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layoutWidth: 0,
      width: new Animated.Value((props.progress || 0) * 100),
    };
    this._onLayout = this._onLayout.bind(this);
  }

  componentWillReceiveProps({ indeterminate, progress = 0 }) {
    const { state: { layoutWidth, width } } = this;

    if (indeterminate) {
      Animated.loop(Animated.timing(width, { fromValue: 0, toValue: layoutWidth })).start();
    } else {
      Animated.spring(width, {
        toValue: progress * layoutWidth,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  }

  _onLayout({ nativeEvent: { layout = {} } }) {
    this.setState({ layoutWidth: layout.width });
    this.componentWillReceiveProps(this.props);
  }

  render() {
    const {
      _onLayout,
      props: { ...inherit },
      state: { width },
    } = this;

    return (
      <View
        onLayout={_onLayout}
        style={StyleSheet.flatten([
          styles.container,
          { backgroundColor: inherit.trackColor || COLOR.BACKGROUND },
          inherit.style,
        ])}
      >
        <Animated.View
          style={StyleSheet.flatten([
            styles.progress,
            {
              backgroundColor: inherit.color || COLOR.PRIMARY,
              width,
            },
          ])}
        />
      </View>
    );
  }
}

ProgressBar.propTypes = {
  indeterminate: bool,
  progress: number,
};

ProgressBar.defaultProps = {
  indeterminate: false,
  progress: undefined,
};

export default ProgressBar;
