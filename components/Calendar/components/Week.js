
import { func, shape } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../../Text';
import Touchable from '../../Touchable';
import styles, { BOX_SIZE } from './Week.style';

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
    availableDates, captions, disabledDates, disabledPast, month, range, today, value,
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
    <View style={styles.container}>
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

        const isHighlight = !isDisabled && isSelected;
        const isOutOfMonth = day.getMonth() !== month;
        const Container = !isDisabled ? Touchable : View;

        return (
          <Container
            containerBorderRadius={BOX_SIZE}
            key={day.toString()}
            onPress={!isDisabled
              ? () => onPress({
                day, tsDay, tsStart, tsEnd, ...inherit,
              })
              : undefined
            }
            style={[
              styles.box,
              range && styles.boxExpand,
              isHighlight && styles.boxSelected,
              isToday && !isHighlight && styles.boxSelectedToday,
            ]}
          >
            <View style={[styles.boxBackground, isDisabled && styles.boxBackgroundDisabled]} />
            <Text
              subtitle={!isDisabled}
              level={!isDisabled ? 2 : 1}
              style={[
                styles.text,
                isHighlight && styles.textHighlight,
                isDisabled && styles.textDisabled,
                isOutOfMonth && !isDisabled && !isSelected && inherit.styleEdges,
              ]}
            >
              {day.getDate()}
            </Text>
            { caption && !isDisabled && (
              <Text caption style={[styles.caption, isHighlight && styles.textHighlight]}>
                {caption}
              </Text>
            )}
          </Container>
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
