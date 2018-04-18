import { number } from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import Motion from '../Motion';
import styles from './ProgressBar.style';

const { COLOR } = THEME;

class ProgressBar extends PureComponent {
  state = {
    layoutWidth: 0,
  }

  render() {
    const {
      props: { progress = 0, ...inherit },
      state: { layoutWidth = 0 },
    } = this;

    return (
      <View
        onLayout={({ nativeEvent: { layout = {} } }) => this.setState({ layoutWidth: layout.width })}
        style={StyleSheet.flatten([
          styles.container,
          { backgroundColor: inherit.trackColor || COLOR.BACKGROUND },
          inherit.style,
        ])}
      >
        <Motion
          style={[styles.progress, { backgroundColor: inherit.color || COLOR.PRIMARY }]}
          timeline={[
            { property: 'width', value: progress * layoutWidth },
          ]}
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
