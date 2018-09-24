import {
  arrayOf, func, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles from '../Calendar.style';

const Selector = ({
  locale = [], onPrevious, onNext, ...state
}) => (
  <View style={styles.row}>
    <Touchable onPress={onPrevious} style={styles.box}>
      <Text>
        {'◀'}
      </Text>
    </Touchable>
    <Text headline level={6} style={styles.month}>
      {`${locale[state.month]} ${state.year}`}
    </Text>
    <Touchable onPress={onNext} style={styles.box}>
      <Text>
        {'▶'}
      </Text>
    </Touchable>
  </View>
);

Selector.propTypes = {
  locale: arrayOf(string).isRequired,
  onPrevious: func.isRequired,
  onNext: func.isRequired,
};

export default Selector;
