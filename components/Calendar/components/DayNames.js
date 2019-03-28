import { arrayOf, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import styles from './DayNames.style';

const DayNames = ({ locale = [], ...inherit }) => (
  <View style={styles.container}>
    { locale.map(day => (
      <Text key={day} subtitle level={2} style={[styles.box, inherit.range && styles.boxExpand]}>
        {day}
      </Text>
    ))}
  </View>
);

DayNames.propTypes = {
  locale: arrayOf(string).isRequired,
};

export default DayNames;
