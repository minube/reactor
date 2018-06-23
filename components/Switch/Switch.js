import { string } from 'prop-types';
import React from 'react';
import { Switch as SwitchNative, View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './Switch.style';

const { COLOR } = THEME;

const Switch = ({ label, ...inherit }) => (
  <View style={[styles.container, inherit.style]}>
    { label && <Text small lighten style={styles.label}>{label}</Text> }
    <SwitchNative
      {...inherit}
      activeThumbColor={COLOR.PRIMARY}
      activeTrackColor={COLOR.BORDER}
      style={styles.switch}
    />
  </View>
);

Switch.propTypes = {
  label: string,
};

Switch.defaultProps = {
  label: undefined,
};

export default Switch;
