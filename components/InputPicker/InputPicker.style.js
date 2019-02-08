import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;
const INPUT_HEIGHT = UNIT * 4.2;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT * 2.4,
    maxWidth: '100%',
    overflow: 'hidden',
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    paddingRight: UNIT,
    paddingLeft: UNIT / 2,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    width: '100%',
  },

  inputError: {
    borderColor: COLOR.ERROR,
  },

  inputDisabled: {
    backgroundColor: COLOR.DISABLED,
  },

  picker: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    height: INPUT_HEIGHT,
    ...Platform.select({
      web: {
        color: COLOR.TEXT,
      },
      android: {
        color: COLOR.TEXT,
      },
      ios: {
        height: 'auto',
      },
    }),
  },

  pickerDisabled: Platform.select({
    web: {
      color: COLOR.TEXT_LIGHTEN,
    },
    android: {
      color: COLOR.TEXT_LIGHTEN,
    },
  }),
});
