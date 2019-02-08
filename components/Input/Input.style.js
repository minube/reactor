import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, FONT, UNIT } = THEME;

const ICON_SIZE = UNIT * 2;
const INPUT_HEIGHT = UNIT * 4.2;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT * 2.2,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    paddingHorizontal: UNIT / 2,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  focus: {
    borderColor: COLOR.PRIMARY,
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

  inputDisabled: {
    color: COLOR.TEXT_LIGHTEN,
  },

  multiline: {
    paddingVertical: UNIT * 0.5,
  },
});
