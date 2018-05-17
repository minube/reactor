import { array, number, object, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './Switch.style';

const { COLOR } = THEME;

const SwitchInput = ({ label, style, ...inherit }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    { label && <Text small lighten style={styles.label}>{label}</Text> }
    <Switch
      {...inherit}
      activeThumbColor={COLOR.PRIMARY}
      activeTrackColor={COLOR.BORDER}
      style={styles.switch}
    />
  </View>
);

SwitchInput.propTypes = {
  label: string,
  style: oneOfType([array, number, object]),
};

SwitchInput.defaultProps = {
  label: undefined,
  style: [],
};

export default SwitchInput;
