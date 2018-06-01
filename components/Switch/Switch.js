import { string } from 'prop-types';
import React from 'react';
import { Switch, View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './Switch.style';

const { COLOR } = THEME;

const SwitchInput = ({ label, ...inherit }) => (
  <View style={[styles.container, inherit.style]}>
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
};

SwitchInput.defaultProps = {
  label: undefined,
};

export default SwitchInput;
