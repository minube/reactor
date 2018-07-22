import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: OFFSET,
  },

  dataSource: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: UNIT * 4.6,
    width: '100%',
    zIndex: 1,
  },

  input: {
    marginBottom: 0,
  },

  error: {
    borderColor: COLOR.ERROR,
    borderTopWidth: 1,
  },

  disabled: {
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

  itemButton: {
    opacity: 0.25,
    transform: [{ scale: 0.75 }],
  },

  active: {
    color: COLOR.ACCENT,
  },
});
