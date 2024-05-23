import React from 'react';

import Text from '../Text';
import styles from './InputHead.style';
import iconStyles from './Input.style';
import { string } from 'prop-types';
import { View } from 'react-native';
import Icon from '../Icon';

const InputHead = ({ label, icon, ...inherit }) => (
    <View style={styles.container}>
        <Icon value={icon} style={[iconStyles.icon, styles.iconLeft]} />
        <Text {...inherit} numberOfLines={2} subtitle level={3} lighten style={styles.text}>{label}</Text>
    </View>
);

InputHead.propTypes = {
    label: string,
};

export default InputHead;
