import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT,
  },

  input: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    color: COLOR.TEXT,
    fontSize: UNIT * 1.6,
    paddingVertical: UNIT * 0.75,
    paddingHorizontal: UNIT * 0.5,
    width: '100%',
    ...Platform.select({
      web: {
        outline: 'none',
      },
    }),
    ...FONT.INPUT,
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
    color: COLOR.SECONDARY,
  },
});
