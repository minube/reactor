import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { COLOR, FONT, UNIT } = THEME;
const BOX_SIZE = UNIT * 4;

export { BOX_SIZE };

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    height: BOX_SIZE,
    justifyContent: 'center',
    minWidth: BOX_SIZE,
  },

  boxExpand: {
    flex: 1,
  },

  boxSelected: {
    borderRadius: 0,
    backgroundColor: COLOR.PRIMARY,
  },

  boxSelectedStart: {
    borderTopLeftRadius: BOX_SIZE / 2,
    borderBottomLeftRadius: BOX_SIZE / 2,
  },

  boxSelectedEnd: {
    borderTopRightRadius: BOX_SIZE / 2,
    borderBottomRightRadius: BOX_SIZE / 2,
  },

  caption: {
    position: 'absolute',
    top: (BOX_SIZE / 2) + (UNIT / 1.35),
    lineHeight: UNIT,
    fontSize: UNIT,
    opacity: 0.5,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginVertical: UNIT / 10,
  },

  textDisabled: {
    color: COLOR.TEXT_LIGHTEN,
    textDecorationLine: 'line-through',
  },

  textHighlight: {
    color: COLOR.WHITE,
  },

  textOutOfMonth: {
    color: COLOR.TEXT_LIGHTEN,
  },

  textToday: {
    color: COLOR.PRIMARY,
  },
});
