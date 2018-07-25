import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, BUTTON, COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({
  touchable: {
    marginHorizontal: UNIT / 2,
    borderRadius: BORDER_RADIUS,
  },

  // -- Layout
  container: {
    ...STYLE.ROW,
    ...STYLE.CENTERED,
    borderRadius: BORDER_RADIUS,
  },

  squared: {
    paddingHorizontal: 0,
  },

  rounded: {
    borderRadius: BUTTON.HEIGHT / 2,
  },

  outlined: {
    borderWidth: UNIT * 0.1,
  },

  // -- Colors
  accent: {
    backgroundColor: COLOR.ACCENT,
  },

  disabled: {
    opacity: 0.5,
  },

  primary: {
    backgroundColor: COLOR.PRIMARY,
  },

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
    marginLeft: UNIT,
  },
});
