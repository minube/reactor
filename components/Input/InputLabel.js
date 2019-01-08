import { string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputLabel.style';

const { COLOR } = THEME;

const InputLabel = ({ error, value }) => (
  <View style={styles.container}>
    <Text subtitle level={3} lighten>
      {value}
    </Text>
    { error && (
      <Text caption color={COLOR.ERROR} level={2}>
        {error}
      </Text>
    )}
  </View>
);

InputLabel.propTypes = {
  error: string,
  value: string,
};

InputLabel.defaultProps = {
  error: undefined,
  value: undefined,
};

export default InputLabel;
