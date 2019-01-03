import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT,
    overflow: 'hidden',
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    paddingRight: UNIT * 0.5,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    width: '100%',
  },

  inputError: {
    borderColor: COLOR.ERROR,
  },

  inputDisabled: {
    backgroundColor: COLOR.BACKGROUND,
  },

  picker: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    height: UNIT * 3.7,
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
      color: COLOR.BASE,
    },
    android: {
      color: COLOR.BASE,
    },
  }),

  active: Platform.select({
    web: {
      color: COLOR.SECONDARY,
    },
    android: {
      color: COLOR.SECONDARY,
    },
  }),
});
