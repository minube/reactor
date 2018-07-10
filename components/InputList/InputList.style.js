import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: OFFSET,
  },

  input: {
    marginBottom: 0,
  },

  inputError: {
    borderColor: COLOR.ERROR,
    borderTopWidth: 1,
  },

  inputDisabled: {
    backgroundColor: COLOR.BACKGROUND,
  },

  value: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BORDER,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: UNIT / 4,
  },

  item: {
    ...STYLE.ROW,
    justifyContent: 'space-between',
    paddingLeft: UNIT,
    paddingVertical: UNIT * 0.5,
  },

  itemText: {
    flex: 1,
  },

  itemButton: {
    opacity: 0.25,
    transform: [{ scale: 0.75 }],
  },

  active: {
    color: COLOR.ACCENT,
  },
});
