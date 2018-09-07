
import {
  arrayOf, bool, date, func, shape,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles from '../Calendar.style';

const onPress = ({
  day, tsDay, tsStart, tsEnd, onSelect, range, value,
}) => {
  if (!range) onSelect(day);
  else if (!tsStart || tsEnd > tsStart) onSelect([day]);
  else if (tsDay > tsStart) onSelect([value[0], day]);
};

const Week = ({
  disabledDates, disabledPast, firstDate, ...inherit
}) => {
  const { month, today, value } = inherit;
  const tsToday = today.getTime();

  let tsStart;
  let tsEnd;
  if (value) {
    const [start, end] = Array.isArray(value) ? value : [value];
    tsStart = start.getTime();
    tsEnd = end ? end.getTime() : tsStart;
  }

  const tsDisabledDates = disabledDates.map(d => d.getTime());
  const days = [];
  for (let i = 0; i < 7; i += 1) {
    days.push(new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i));
  }

  return (
    <View style={styles.row}>
      {days.map((day) => {
        const tsDay = day.getTime();
        const isToday = tsDay === tsToday;
        const isSelected = tsDay >= tsStart && tsDay <= tsEnd;
        const highlight = isToday || isSelected;

        let isDisabled = false;
        if (disabledPast) isDisabled = tsDay < tsToday;
        else isDisabled = tsDisabledDates.includes(tsDay);

        return (
          <Touchable
            key={day.toString()}
            onPress={!isDisabled ? () => onPress({ day, tsDay, tsStart, tsEnd, ...inherit }) : undefined}
            style={[
              styles.day,
              isToday && styles.today,
              isSelected && styles.selected,
              isSelected && tsDay === tsStart && styles.selectedStart,
              isSelected && tsDay === tsEnd && styles.selectedEnd,
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
  onSelect: func,
  firstDate: shape({}),
};

Week.defaultProps = {
  onSelect() {},
  firstDate: undefined,
};

export default Week;
