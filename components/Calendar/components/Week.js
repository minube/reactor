
import { func, shape } from 'prop-types';
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

const Week = ({ firstDate, ...inherit }) => {
  const {
    availableDates, captions, disabledDates, disabledPast, month, today, value,
  } = inherit;
  const tsToday = today.getTime();

  let tsStart;
  let tsEnd;
  let tsAvailableDates;
  let tsCaptionsDates;
  let tsDisabledDates;

  if (availableDates) tsAvailableDates = availableDates.map(d => d.getTime());
  else if (captions) tsCaptionsDates = captions.map(({ date }) => date.getTime());
  else if (disabledDates) tsDisabledDates = disabledDates.map(d => d.getTime());

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
        let caption;

        if (disabledPast) isDisabled = tsDay < tsToday;

        if (!isDisabled) {
          if (tsAvailableDates) isDisabled = !tsAvailableDates.includes(tsDay);
          else if (tsDisabledDates) isDisabled = tsDisabledDates.includes(tsDay);

          if (tsCaptionsDates && tsCaptionsDates.includes(tsDay)) {
            const item = captions[tsCaptionsDates.indexOf(tsDay)];
            caption = item.value;
          }
        }

        const stylesDay = [
          isToday && styles.today,
          !isDisabled && isSelected && styles.highlight,
        ];

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
              !isDisabled && isSelected && styles.selected,
              !isDisabled && isSelected && tsDay === tsStart && styles.selectedStart,
              !isDisabled && isSelected && tsDay === tsEnd && styles.selectedEnd,
            ]}
          >
            <Text
              level={3}
              style={[
                ...stylesDay,
                isToday && styles.textBold,
                !isDisabled && isSelected && styles.textBold,
                ((day.getMonth() !== month && availableDates.includes(day)) || isDisabled) && styles.disabled,
              ]}
            >
              {day.getDate()}
            </Text>
            { caption && (
              <Text caption style={[...stylesDay, styles.caption]}>
                {caption}
              </Text>
            )}
          </Touchable>
        );
      })}
    </View>
  );
};

Week.propTypes = {
  firstDate: shape(),
  onSelect: func,
};

Week.defaultProps = {
  firstDate: undefined,
  onSelect() {},
};

export default Week;
