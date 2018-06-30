import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, INPUT_HEIGHT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    minHeight: INPUT_HEIGHT,
    marginBottom: OFFSET,
  },

  label: {
    marginVertical: UNIT / 4,
  },

  input: {
    backgroundColor: COLOR.WHITE,
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
