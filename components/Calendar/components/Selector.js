import {
  arrayOf, func, number, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles from '../Calendar.style';

const Selector = ({
  locale = [], onPrevious, onNext, month, year,
}) => (
  <View style={styles.row}>
    <Touchable onPress={onPrevious} style={styles.day}>
      <Text large>
        {'◀'}
      </Text>
    </Touchable>
    <Text bold>
      {`${locale[month]} ${year}`}
    </Text>
    <Touchable onPress={onNext} style={styles.day}>
      <Text large>
        {'▶'}
      </Text>
    </Touchable>
  </View>
);

Selector.propTypes = {
  month: number.isRequired,
  year: number.isRequired,
  locale: arrayOf(string).isRequired,
  onPrevious: func.isRequired,
  onNext: func.isRequired,
};

export default Selector;
