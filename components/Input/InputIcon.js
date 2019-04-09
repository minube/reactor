import React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import styles from './InputIcon.style';

export default inherit => (
  <View style={[styles.container, inherit.style]}>
    <Icon value="doneContrast" style={styles.icon} />
  </View>
);
