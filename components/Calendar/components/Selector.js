import {
  arrayOf, func, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { back, forward } from '../../Icon/assets';
import Text from '../../Text';
import Icon from '../../Icon';
import Touchable from '../../Touchable';
import styles from './Selector.style';

const Selector = ({
  locale = [], onPrevious, onNext, ...state
}) => (
  <View style={styles.container}>
    <Touchable onPress={onPrevious} style={[styles.touchable, !onPrevious && styles.touchableDisabled]}>
      <Icon value={back} />
    </Touchable>
    <Text headline level={6} style={styles.value}>
      {`${locale[state.month]} ${state.year}`}
    </Text>
    <Touchable onPress={onNext} style={styles.touchable}>
      <Icon value={forward} />
    </Touchable>
  </View>
);

Selector.propTypes = {
  locale: arrayOf(string).isRequired,
  onPrevious: func,
  onNext: func.isRequired,
};

Selector.defaultProps = {
  onPrevious: undefined,
};

export default Selector;
