import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../../common';
import Button from '../../Button';
import Text from '../../Text';
import styles from './Selector.style';

const { COLOR } = THEME;
const buttonProps = {
  color: COLOR.LIGHT_GREY, outlined: true, rounded: true, small: true,
};

const Selector = ({ onPrevious, onNext, title }) => (
  <View style={styles.container}>
    <Button
      {...buttonProps}
      disabled={!onPrevious}
      icon="navLeft"
      onPress={onPrevious}
      style={!onPrevious && styles.buttonDisabled}
    />
    <Text headline level={6} style={styles.value}>{title}</Text>
    <Button
      {...buttonProps}
      disabled={!onNext}
      icon="navRight"
      onPress={onNext}
      style={!onNext && styles.buttonDisabled}
    />
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
