import { bool, string } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputLabel.style';

const { COLOR } = THEME;

const InputLabel = ({ error, value }) => (
  <Text color={error ? COLOR.ERROR : undefined} tiny lighten style={styles.label}>
    {value}
  </Text>
);

InputLabel.propTypes = {
  error: bool,
  value: string.isRequired,
};

InputLabel.defaultProps = {
  error: false,
};

export default InputLabel;
