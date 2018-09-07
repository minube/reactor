
import { func, shape, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles from '../Calendar.style';

const Week = ({
  month, onPress, today, selected, startDate,
}) => {
  const strToday = today.toString();
  const strSelected = selected.toString();
  const days = [];

  for (let i = 0; i < 7; i += 1) {
    days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i));
  }

  return (
    <View style={styles.row}>
      {days.map((day) => {
        const strDay = day.toString();

        const isToday = strDay === strToday;
        const isSelected = strDay === strSelected;
        const highlight = isToday || isSelected;

        return (
          <Touchable
            key={day.toString()}
            onPress={() => onPress(day)}
            style={[styles.day, isToday && styles.today, isSelected && styles.selected]}
          >
            <Text
              small
              lighten={day.getMonth() !== month}
              semibold={isToday}
              style={highlight ? styles.highlight : undefined}
            >
              {day.getDate()}
            </Text>
          </Touchable>
        );
      })}
    </View>
  );
};

Week.propTypes = {
  startDate: shape({}),
  month: string,
  onPress: func,
  today: shape({}).isRequired,
};

Week.defaultProps = {
  startDate: undefined,
  month: undefined,
  onPress() {},
};

export default Week;
