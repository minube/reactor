import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, UNIT, SPACE,
} = THEME;

export default StyleSheet.create({
  caption: {
    color: COLOR.WHITE,
    flex: 1,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    marginTop: SPACE.MEDIUM,
  },

  frame: {
    backgroundColor: COLOR.BLACK,
    borderRadius: BORDER_RADIUS,
    minWidth: UNIT * 30,
    maxWidth: UNIT * 51.2,
  },

  dialog: {
    justifyContent: 'flex-end',
    padding: SPACE.MEDIUM,
  },
});
