import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, INPUT_HEIGHT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    minHeight: INPUT_HEIGHT,
    marginBottom: OFFSET,
  },

  input: {
    backgroundColor: COLOR.WHITE,
    paddingRight: UNIT * 0.5,
    borderColor: COLOR.BORDER,
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
    height: UNIT * 3.3,
    color: COLOR.TEXT,
    // @TODO: How we can set size and weight
    // fontSize: FONT.SIZE.REGULAR,
    // fontWeight: FONT.WEIGHT.REGULAR,
    // ...Platform.select({
    //   web: {
    //     fontFamily: FONT.FAMILY,
    //   },
    // }),
  },

  pickerDisabled: {
    color: COLOR.BASE,
  },

  active: {
    color: COLOR.ACCENT,
  },
});
