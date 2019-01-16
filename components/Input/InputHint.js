import React from 'react';

import Text from '../Text';
import styles from './InputHint.style';

const InputHint = inherit => (
  <Text {...inherit} caption level={2} lighten style={styles.container} />
);

export default InputHint;
