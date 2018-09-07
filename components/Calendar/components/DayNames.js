import { arrayOf, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import styles from '../Calendar.style';

const DayNames = ({ locale = [] }) => (
  <View style={styles.row}>
    { locale.map(day => (
      <Text key={day} tiny semibold lighten style={styles.dayName}>
        {day}
      </Text>))}
  </View>
);

DayNames.propTypes = {
  locale: arrayOf(string).isRequired,
};

export default DayNames;
