import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Switch, Text, View } from 'react-native';

import { STYLE, THEME } from '../../common';
import styles from './style';

const { COLOR } = THEME;

const SwitchInput = ({ label, style, ...inherit }) => (
  <View style={[STYLE.ROW, styles.container, style]}>
    { label && <Text style={[styles.label, (inherit.disabled && styles.disabled)]}>{label}</Text>}
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
  style: oneOfType([array, number]),
};

SwitchInput.defaultProps = {
  label: undefined,
  style: [],
};

export default SwitchInput;
