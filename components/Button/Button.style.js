import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, UNIT,
} = THEME;

const REGULAR_SIZE = UNIT * 4.5;

export { REGULAR_SIZE };

export default StyleSheet.create({
  touchable: {
    borderRadius: BORDER_RADIUS,
  },

  // -- Layout
  container: {
    ...LAYOUT.STYLE.CENTERED,
    borderRadius: BORDER_RADIUS,
  },

  regular: {
    minWidth: REGULAR_SIZE,
    height: REGULAR_SIZE,
    paddingHorizontal: UNIT * 3,
  },

  small: {
    minWidth: UNIT * 3,
    height: UNIT * 3,
    paddingHorizontal: UNIT * 1.5,
  },

  squared: {
    paddingHorizontal: 0,
  },

  rounded: {
    borderRadius: REGULAR_SIZE / 2,
  },

  outlined: {
    borderWidth: UNIT * 0.1,
  },

  // -- Colors
  secondary: {
    backgroundColor: COLOR.SECONDARY,
  },

  disabled: {
    opacity: 0.5,
  },

  primary: {
    backgroundColor: COLOR.PRIMARY,
  },

  row: LAYOUT.STYLE.ROW,

  // -- Text
  textNoPointerEvent: {
    ...Platform.select({
      web: {
        userSelect: 'none',
      },
    }),
  },

  text: {
    fontSize: FONT.SIZE.SMALL,
  },

  textSmall: {
    fontSize: FONT.SIZE.TINY,
  },

  textMarginLeft: {
    marginLeft: UNIT / 2,
  },
});
