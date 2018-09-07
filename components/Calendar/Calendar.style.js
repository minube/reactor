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
    borderRadius: DAY_SIZE / 2,
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
    backgroundColor: 'grey',
  },

  today: {
    backgroundColor: COLOR.PRIMARY,
  },
});
