import React from 'react';

import Text from '../Text';
import styles from './InputHead.style';
import { string } from 'prop-types';

const InputHead = ({ label, ...inherit }) => (
    <Text {...inherit} numberOfLines={2} subtitle level={3} lighten style={styles.container}>{label}</Text>
);

InputHead.propTypes = {
    label: string,
};

export default InputHead;
