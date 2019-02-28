import { arrayOf, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import styles from '../Calendar.style';

const DayNames = ({ locale = [] }) => (
  <View style={styles.row}>
    { locale.map(day => (
      <Text key={day} caption level={2} lighten style={[styles.day, styles.dayName]}>
        {day}
      </Text>
    ))}
  </View>
);

DayNames.propTypes = {
  locale: arrayOf(string).isRequired,
};

export default DayNames;
