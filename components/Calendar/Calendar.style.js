import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;
const BOX_HEIGHT = UNIT * 3.6;

export default StyleSheet.create({
  activity: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
  },

  box: {
    alignItems: 'center',
    height: BOX_HEIGHT,
    justifyContent: 'center',
    minWidth: BOX_HEIGHT,
  },

  busy: {
    opacity: 0.1,
  },

  container: {
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: OFFSET,
    paddingVertical: UNIT,
    justifyContent: 'center',
  },

  day: {
    flex: 1,
  },

  dayName: {
    paddingVertical: UNIT / 2,
    textAlign: 'center',
  },

  disabled: {
    color: COLOR.CONTENT,
  },

  highlight: {
    color: COLOR.WHITE,
  },

  row: {
    ...STYLE.ROW,
    justifyContent: 'center',
  },

  month: {
    flex: 1,
    textAlign: 'center',
  },

  selected: {
    borderRadius: 0,
    backgroundColor: COLOR.PRIMARY,
  },

  selectedStart: {
    borderTopLeftRadius: BOX_HEIGHT / 2,
    borderBottomLeftRadius: BOX_HEIGHT / 2,
  },

  selectedEnd: {
    borderTopRightRadius: BOX_HEIGHT / 2,
    borderBottomRightRadius: BOX_HEIGHT / 2,
  },

  today: {
    color: COLOR.PRIMARY,
  },
});
