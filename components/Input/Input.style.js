import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET, UNIT, STYLE,
} = THEME;

export default StyleSheet.create({
  container: {
    minHeight: LAYOUT.INPUT_HEIGHT,
    marginBottom: OFFSET,
  },

  label: {
    color: COLOR.TEXT_LIGHTEN,
    fontSize: FONT.SIZE.SMALL,
    marginVertical: UNIT / 4,
  },

  labelError: {
    color: COLOR.ERROR,
  },

  labelFocus: {},

  input: {
    borderColor: COLOR.BORDER,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    color: COLOR.TEXT,
    fontSize: FONT.SIZE.REGULAR,
    fontWeight: FONT.WEIGHT.REGULAR,
    paddingVertical: UNIT * 0.75,
    paddingHorizontal: UNIT * 0.5,
    width: '100%',

    ...Platform.select({
      web: {
        fontFamily: FONT.FAMILY,
        outline: 'none',
      },
    }),
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

  active: {
    color: COLOR.ACCENT,
  },
});
