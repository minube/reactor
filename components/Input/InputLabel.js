import React from 'react';

import Text from '../Text';
import styles from './InputLabel.style';

const InputLabel = inherit => <Text {...inherit} subtitle level={3} lighten style={styles.container} />;

export default InputLabel;
