import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, UNIT,
} = THEME;

const REGULAR_SIZE = UNIT * 4.4;
const SMALL_SIZE = UNIT * 2.8;

export { REGULAR_SIZE, SMALL_SIZE };

export default StyleSheet.create({
  // -- Layout
  container: {
    ...LAYOUT.STYLE.CENTERED,
    borderRadius: BORDER_RADIUS,
  },

  disabled: {
    backgroundColor: COLOR.BASE,
  },

  disabledOpacity: {
    opacity: 0.5,
  },

  outlined: {
    borderWidth: UNIT * 0.1,
  },

  regular: {
    minWidth: REGULAR_SIZE,
    height: REGULAR_SIZE,
    paddingHorizontal: UNIT * 3,
  },

  rounded: {
    borderRadius: REGULAR_SIZE / 2,
  },

  row: LAYOUT.STYLE.ROW,

  small: {
    minWidth: SMALL_SIZE,
    height: SMALL_SIZE,
    paddingHorizontal: SMALL_SIZE / 2,
  },

  squared: {
    paddingHorizontal: 0,
  },

  shadow: LAYOUT.STYLE.SHADOW,

  touchable: {
    borderRadius: BORDER_RADIUS,
  },

  // -- Text
  text: {
    fontSize: UNIT * 1.6,
    letterSpacing: parseFloat((UNIT * -0.02).toFixed(2), 10),
    ...FONT.BUTTON,
    ...Platform.select({
      web: {
        userSelect: 'none',
      },
    }),
  },

  textSmall: {
    fontSize: UNIT * 1.4,
    letterSpacing: parseFloat((UNIT * -0.015).toFixed(2), 10),
  },

  textMarginLeft: {
    marginLeft: UNIT / 2,
  },
});
