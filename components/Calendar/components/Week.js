
import {
  arrayOf, bool, date, func, shape,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles from '../Calendar.style';

const Week = ({
  disabledDates, disabledPast, onPress, startDate, ...state
}) => {
  const { month, selected, today } = state;
  const strToday = today.toString();
  const strSelected = selected.toString();
  const tsDisabledDates = disabledDates.map(d => d.getTime());
  const days = [];

  for (let i = 0; i < 7; i += 1) {
    days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i));
  }

  return (
    <View style={styles.row}>
      {days.map((day) => {
        const strDay = day.toString();
        const tsDay = day.getTime();

        const isToday = strDay === strToday;
        const isSelected = strDay === strSelected;
        const highlight = isToday || isSelected;

        let isDisabled = false;
        if (disabledPast) isDisabled = tsDay < today.getTime();
        else isDisabled = tsDisabledDates.includes(tsDay);

        return (
          <Touchable
            key={day.toString()}
            onPress={!isDisabled ? () => onPress(day) : undefined}
            style={[
              styles.day,
              isToday && styles.today,
              isSelected && styles.selected,
            ]}
          >
            <Text
              small
              lighten={day.getMonth() !== month || isDisabled}
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
  disabledDates: arrayOf(date).isRequired,
  disabledPast: bool.isRequired,
  onPress: func,
  startDate: shape({}),
};

Week.defaultProps = {
  onPress() {},
  startDate: undefined,
};

export default Week;
