import { arrayOf, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import styles from './DayNames.style';

const DayNames = ({ locale = [] }) => (
  <View style={styles.container}>
    { locale.map(day => (
      <Text key={day} caption level={2} lighten style={styles.content}>
        {day}
      </Text>
    ))}
  </View>
);

DayNames.propTypes = {
  locale: arrayOf(string).isRequired,
};

export default DayNames;
