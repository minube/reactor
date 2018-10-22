
import {
  arrayOf, bool, func, shape,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles, { BOX_HEIGHT } from '../Calendar.style';

const onPress = ({
  day, tsDay, tsStart, tsEnd, onSelect, range, value,
}) => {
  if (!range) onSelect(day);
  else if (tsDay < tsStart) onSelect([day, value[0]]);
  else if (!tsStart || tsEnd > tsStart) onSelect([day]);
  else if (tsDay > tsStart) onSelect([value[0], day]);
};

const Week = ({
  availableDates, disabledDates, disabledPast, firstDate, ...inherit
}) => {
  const { month, today, value } = inherit;
  const tsToday = today.getTime();

  let tsStart;
  let tsEnd;
  let tsAvailableDates;
  let tsDisabledDates;

  if (availableDates.length > 0) tsAvailableDates = availableDates.map(d => d.getTime());
  else if (disabledDates.length > 0) tsDisabledDates = disabledDates.map(d => d.getTime());

  if (value) {
    const [start, end] = Array.isArray(value) ? value : [value];
    tsStart = start.getTime();
    tsEnd = end ? end.getTime() : tsStart;
  }

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

        let isDisabled = false;
        if (disabledPast) isDisabled = tsDay < tsToday;
        else if (tsAvailableDates) isDisabled = !tsAvailableDates.includes(tsDay);
        else if (tsDisabledDates) isDisabled = tsDisabledDates.includes(tsDay);

        return (
          <Touchable
            containerBorderRadius={BOX_HEIGHT}
            key={day.toString()}
            onPress={!isDisabled
              ? () => onPress({
                day, tsDay, tsStart, tsEnd, ...inherit,
              })
              : undefined
            }
            style={[
              styles.box,
              styles.day,
              isSelected && styles.selected,
              isSelected && tsDay === tsStart && styles.selectedStart,
              isSelected && tsDay === tsEnd && styles.selectedEnd,
            ]}
          >
            <Text
              level={3}
              style={[
                isToday && styles.today,
                (isToday || isSelected) && styles.textBold,
                (day.getMonth() !== month || isDisabled) && styles.disabled,
                isSelected && styles.highlight,
              ]}
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
  availableDates: arrayOf(shape()).isRequired,
  disabledDates: arrayOf(shape()).isRequired,
  disabledPast: bool.isRequired,
  onSelect: func,
  firstDate: shape(),
};

Week.defaultProps = {
  firstDate: undefined,
  onSelect() {},
};

export default Week;
