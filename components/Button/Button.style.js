import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, BUTTON, COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({

  container: StyleSheet.flatten([
    STYLE.ROW,
    STYLE.CENTERED,
    {
      backgroundColor: COLOR.TEXT,
      borderRadius: BORDER_RADIUS,
      height: BUTTON.HEIGHT,
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
    borderRadius: BUTTON.FLOATING_HEIGHT / 2,
    height: BUTTON.FLOATING_HEIGHT,
    paddingHorizontal: 0,
    width: BUTTON.FLOATING_HEIGHT,
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

  rounded: {
    borderRadius: BUTTON.HEIGHT / 2,
  },

  small: {
    height: BUTTON.SMALL_HEIGHT,
    paddingHorizontal: BUTTON.SMALL_HEIGHT / 2,
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
