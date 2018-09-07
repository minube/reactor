import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;
const DAY_SIZE = UNIT * 3.6;

export default StyleSheet.create({
  activity: {
    position: 'absolute',
    zIndex: 1,
  },

  busy: {
    opacity: 0.1,
  },

  container: {
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: OFFSET,
    paddingVertical: OFFSET / 2,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  day: {
    alignItems: 'center',
    height: DAY_SIZE,
    justifyContent: 'center',
    width: DAY_SIZE,
  },

  dayName: {
    paddingVertical: UNIT / 2,
    textAlign: 'center',
    width: UNIT * 3.6,
  },

  highlight: {
    color: COLOR.WHITE,
  },

  row: {
    ...STYLE.ROW,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  selected: {
    borderRadius: 0,
    backgroundColor: 'grey',
  },

  selectedStart: {
    borderTopLeftRadius: DAY_SIZE / 2,
    borderBottomLeftRadius: DAY_SIZE / 2,
  },

  selectedEnd: {
    borderTopRightRadius: DAY_SIZE / 2,
    borderBottomRightRadius: DAY_SIZE / 2,
  },

  today: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: DAY_SIZE / 2,
  },
});
