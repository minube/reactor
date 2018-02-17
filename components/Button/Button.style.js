import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, SCREEN, UNIT,
} = THEME;
const BUTTON_HEIGHT = UNIT * 4.5;
const BUTTON_FLOATING_HEIGHT = UNIT * 6;

export default StyleSheet.create({

  container: StyleSheet.flatten([
    STYLE.ROW,
    STYLE.CENTERED,
    {
      backgroundColor: COLOR.TEXT,
      borderRadius: LAYOUT.BORDER_RADIUS,
      height: BUTTON_HEIGHT,
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
    borderRadius: BUTTON_FLOATING_HEIGHT / 2,
    height: BUTTON_FLOATING_HEIGHT,
    paddingHorizontal: 0,
    width: BUTTON_FLOATING_HEIGHT,
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
    height: SCREEN().REGULAR || SCREEN().LARGE ? BUTTON_HEIGHT : UNIT * 3,
  },

  rounded: {
    borderRadius: BUTTON_HEIGHT / 2,
  },

  small: {
    height: BUTTON_HEIGHT / 2,
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
