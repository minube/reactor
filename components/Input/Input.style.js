import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, FONT, UNIT } = THEME;

const ICON_SIZE = UNIT * 2;
const INPUT_HEIGHT = UNIT * 4.4;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    paddingHorizontal: UNIT / 2,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
  },

  active: {
    color: COLOR.SECONDARY,
  },

  icon: {
    marginHorizontal: UNIT / 2,
    height: ICON_SIZE,
    width: ICON_SIZE,
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    color: COLOR.TEXT,
    fontSize: UNIT * 1.6,
    minHeight: INPUT_HEIGHT,
    paddingHorizontal: UNIT / 2,
    paddingVertical: UNIT * 0.75,
    width: '100%',
    ...Platform.select({
      web: {
        outline: 'none',
      },
    }),
    ...FONT.INPUT,
  },

  multiline: {
    paddingVertical: UNIT * 0.5,
  },

  inputError: {
    borderColor: COLOR.ERROR,
  },

  inputFocus: {
    borderColor: COLOR.PRIMARY,
  },

  inputDisabled: {
    color: COLOR.BASE,
    backgroundColor: COLOR.BACKGROUND,
  },


});
