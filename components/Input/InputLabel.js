import { string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputLabel.style';

const { COLOR } = THEME;

const InputLabel = ({ error, hint, value }) => (
  <View style={styles.container}>
    <Text small lighten>
      {value}
    </Text>
    { (error || hint) && (
      <Text color={error ? COLOR.ERROR : undefined} tiny lighten>
        {error || hint}
      </Text>
    )}
  </View>
);

InputLabel.propTypes = {
  error: string,
  hint: string,
  value: string,
};

InputLabel.defaultProps = {
  error: undefined,
  hint: undefined,
  value: undefined,
};

export default InputLabel;
