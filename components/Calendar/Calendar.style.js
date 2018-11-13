import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  COLOR, FONT, OFFSET, UNIT,
} = THEME;
const BOX_HEIGHT = UNIT * 3.6;

export { BOX_HEIGHT };

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
    paddingHorizontal: OFFSET,
    paddingVertical: OFFSET / 2,
    justifyContent: 'center',
  },

  day: {
    flex: 1,
  },

  dayName: {
    marginTop: UNIT,
    textAlign: 'center',
  },

  disabled: {
    color: COLOR.BASE,
  },

  highlight: {
    color: COLOR.WHITE,
  },

  row: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
    marginVertical: UNIT / 10,
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

  textBold: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  today: {
    color: COLOR.PRIMARY,
  },
});
