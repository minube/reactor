import React from 'react';
import { Platform, ProgressBar, StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import styles from './ProgressBar.style';

const { COLOR } = THEME;

export default ({ ...inherit }) => (
  Platform.OS === 'web'
    ?
      <ProgressBar
        color={COLOR.PRIMARY}
        trackColor={COLOR.BACKGROUND}
        {...inherit}
        style={StyleSheet.flatten([styles.container, inherit.style])}
      />
    :
      <View
        style={StyleSheet.flatten([
          styles.container,
          { backgroundColor: inherit.trackColor || COLOR.BACKGROUND },
          inherit.style,
        ])}
      >
        <View
          style={StyleSheet.flatten([
            styles.progress,
            {
              backgroundColor: inherit.color || COLOR.PRIMARY,
              width: `${(inherit.progress || 0) * 100}%`,
            },
          ])}
        />
      </View>
);
