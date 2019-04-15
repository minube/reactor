import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Icon from '../../Icon';
import Touchable from '../../Touchable';
import styles from './Selector.style';

const Selector = ({ onPrevious, onNext, title }) => (
  <View style={styles.container}>
    <Touchable onPress={onPrevious} style={[styles.touchable, !onPrevious && styles.touchableDisabled]}>
      <Icon value="leftOutline" />
    </Touchable>
    <Text headline level={6} style={styles.value}>{title}</Text>
    <Touchable onPress={onNext} style={[styles.touchable, !onNext && styles.touchableDisabled]}>
      <Icon value="rightOutline" />
    </Touchable>
  </View>
);

Selector.propTypes = {
  title: string.isRequired,
  onNext: func,
  onPrevious: func,
};

Selector.defaultProps = {
  onNext: undefined,
  onPrevious: undefined,
};

export default Selector;
