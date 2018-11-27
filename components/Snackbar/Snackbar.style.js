import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  button: {
    paddingHorizontal: UNIT,
  },

  caption: {
    color: COLOR.WHITE,
    flex: 1,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    marginTop: OFFSET,
  },

  frame: {
    backgroundColor: COLOR.BLACK,
    borderRadius: BORDER_RADIUS,
    maxWidth: UNIT * 51.2,
    minWidth: UNIT * 32,
  },

  dialog: {
    justifyContent: 'flex-end',
    padding: OFFSET,
  },
});
