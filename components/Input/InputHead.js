import React from 'react';

import Text from '../Text';
import styles from './InputHead.style';
import { string } from 'prop-types';

const InputHead = ({ title, ...inherit }) => (
    <Text {...inherit} numberOfLines={2} subtitle level={3} lighten style={styles.container}>{title}</Text>
);

InputHead.propTypes = {
    title: string,
};

export default InputHead;
