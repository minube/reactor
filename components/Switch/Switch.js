import { array, number, object, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { THEME } from '../../common';
import styles from './Switch.style';

const { COLOR } = THEME;

const SwitchInput = ({ label, style, ...inherit }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    { label && <Text style={StyleSheet.flatten([styles.label, (inherit.disabled && styles.disabled)])}>{label}</Text>}
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
