import { func, string } from 'prop-types';
import React from 'react';
import { Switch as SwitchNative, View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './Switch.style';

const { COLOR } = THEME;

const Switch = ({
  color, label, onChange, ...inherit
}) => (
  <View style={[styles.container, inherit.style]}>
    { label && (
    <Text level={2} lighten style={styles.label}>
      {label}
    </Text>
    ) }
    <SwitchNative
      {...inherit}
      value={inherit.value || false}
      activeThumbColor={color || COLOR.PRIMARY}
      activeTrackColor={COLOR.BASE}
      onValueChange={onChange}
      style={styles.switch}
    />
  </View>
);

Switch.propTypes = {
  color: string,
  label: string,
  onChange: func,
};

Switch.defaultProps = {
  color: undefined,
  label: undefined,
  onChange: undefined,
};

export default Switch;
