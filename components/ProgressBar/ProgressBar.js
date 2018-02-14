import React from 'react';
import { Platform, ProgressBar, StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import styles from './ProgressBar.style';

const { COLOR } = THEME;

export default ({ ...inherit }) => (
  Platform.OS === 'web'
    ? <ProgressBar color={COLOR.PRIMARY} trackColor={COLOR.BACKGROUND} {...inherit} />
    :
    <View style={styles.container}>
      <View style={StyleSheet.create([styles.value, { width: `${(inherit.progress || 0) * 100}%` }])} />
    </View>
);
