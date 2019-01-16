import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT, UNIT } = THEME;

const INPUT_HEIGHT = UNIT * 4.4;
const ERROR_SIZE = UNIT * 1.8;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT,
  },

  error: {
    backgroundColor: COLOR.ERROR,
    borderRadius: UNIT,
    height: ERROR_SIZE,
    position: 'absolute',
    right: UNIT,
    top: (INPUT_HEIGHT / 2) - (ERROR_SIZE / 2),
    width: ERROR_SIZE,
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    color: COLOR.TEXT,
    fontSize: UNIT * 1.6,
    minHeight: INPUT_HEIGHT,
    paddingHorizontal: UNIT,
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

  active: {
    color: COLOR.SECONDARY,
  },
});
