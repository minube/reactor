import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, SCREEN, UNIT,
} = THEME;

export default StyleSheet.create({

  container: StyleSheet.flatten([
    STYLE.ROW,
    STYLE.CENTERED,
    {
      backgroundColor: COLOR.TEXT,
      borderRadius: LAYOUT.BORDER_RADIUS,
      height: LAYOUT.BUTTON_HEIGHT,
      paddingHorizontal: UNIT * 3,
      margin: UNIT / 2,
    },
  ]),

  accent: {
    backgroundColor: COLOR.ACCENT,
  },

  activity: {
    marginRight: UNIT,
  },

  floating: {
    borderRadius: LAYOUT.BUTTON_FLOATING_HEIGHT / 2,
    height: LAYOUT.BUTTON_FLOATING_HEIGHT,
    paddingHorizontal: 0,
    width: LAYOUT.BUTTON_FLOATING_HEIGHT,
  },

  disabled: {
    backgroundColor: COLOR.BORDER,
    borderWidth: 0,
  },

  flat: {
    backgroundColor: COLOR.WHITE,
    borderWidth: UNIT * 0.1,
    borderColor: COLOR.BORDER,
  },

  primary: {
    backgroundColor: COLOR.PRIMARY,
  },

  responsive: {
    height: SCREEN().REGULAR || SCREEN().LARGE ? LAYOUT.BUTTON_HEIGHT : LAYOUT.BUTTON_SMALL_HEIGHT,
  },

  rounded: {
    borderRadius: LAYOUT.BUTTON_HEIGHT / 2,
  },

  small: {
    height: LAYOUT.BUTTON_SMALL_HEIGHT,
    paddingHorizontal: UNIT * 1.5,
  },

  text: {
    color: COLOR.WHITE,
    fontSize: FONT.SIZE.SMALL,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  textDisabled: {
    opacity: 0.75,
  },

  textFlat: {
    color: COLOR.TEXT_LIGHTEN,
  },

  textResponsive: {
    fontSize: SCREEN().REGULAR || SCREEN().LARGE ? FONT.SIZE.SMALL : FONT.SIZE.TINY,
  },

  textSmall: {
    fontSize: FONT.SIZE.TINY,
  },

  icon: {
    width: FONT.SIZE.REGULAR,
    height: FONT.SIZE.REGULAR,
    marginRight: UNIT,
  },

  iconFloating: {
    width: FONT.SIZE.LARGE,
    height: FONT.SIZE.LARGE,
  },
});
