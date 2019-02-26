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

  boxDisabled: {
    opacity: 0.1,
  },

  busy: {
    opacity: 0.1,
  },

  caption: {
    position: 'absolute',
    top: (BOX_HEIGHT / 2) + (UNIT / 1.75),
    lineHeight: UNIT,
    fontSize: UNIT,
    opacity: 0.5,
  },

  container: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: OFFSET,
    paddingVertical: OFFSET / 2,
    justifyContent: 'center',
  },

  day: {
    flex: 1,
    // lineHeight: UNIT,
  },

  dayName: {
    marginTop: UNIT,
    textAlign: 'center',
  },

  disabled: {
    color: COLOR.TEXT_LIGHTEN,
    fontWeight: FONT.WEIGHT.REGULAR,
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
    borderRadius: BOX_HEIGHT / 2,
    backgroundColor: COLOR.PRIMARY,
    minWidth: BOX_HEIGHT / 1.1,
    paddingVertical: OFFSET / 4,
    textAlign: 'center',
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

  textSemiBold: {
    fontWeight: FONT.WEIGHT.SEMIBOLD,
  },

  today: {
    color: COLOR.PRIMARY,
  },
});
