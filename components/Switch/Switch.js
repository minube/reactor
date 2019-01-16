import { func, string } from 'prop-types';
import React from 'react';
import { Switch as SwitchNative, View } from 'react-native';

import { THEME } from '../../common';
import InputLabel from '../Input/InputLabel';
import styles from './Switch.style';

const { COLOR } = THEME;

const Switch = ({
  color, label, onChange, ...inherit
}) => (
  <View style={[styles.container, inherit.style]}>
    <SwitchNative
      {...inherit}
      value={inherit.value || false}
      activeThumbColor={color || COLOR.PRIMARY}
      activeTrackColor={COLOR.BASE}
      onValueChange={onChange}
      style={styles.switch}
    />
    { label && (
      <InputLabel>
        {label}
      </InputLabel>)}
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
