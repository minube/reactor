import { bool, number } from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import Motion from '../Motion';
import styles from './ProgressBar.style';

const { COLOR } = THEME;

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layoutWidth: 0,
    };
    this._onLayout = this._onLayout.bind(this);
  }

  _onLayout({ nativeEvent: { layout = {} } }) {
    this.setState({ layoutWidth: layout.width });
  }

  render() {
    const {
      _onLayout,
      props: { progress = 0, ...inherit },
      state: { layoutWidth = 0, width },
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
        <Motion
          style={StyleSheet.flatten([
            styles.progress,
            { backgroundColor: inherit.color || COLOR.PRIMARY },
          ])}
          property="width"
          value={progress * layoutWidth}
          type="timing"
        />
      </View>
    );
  }
}

ProgressBar.propTypes = {
  progress: number,
};

ProgressBar.defaultProps = {
  progress: undefined,
};

export default ProgressBar;
