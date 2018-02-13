import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT,
} = THEME;
const BUTTON_FLOATING_HEIGHT = LAYOUT.BUTTON_HEIGHT * 1.5;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.TEXT,
    borderRadius: UNIT * 0.3,
    // display: 'flex',
    height: LAYOUT.BUTTON_HEIGHT,
    paddingHorizontal: UNIT * 3,
    margin: UNIT / 2,
  },

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

  rounded: {
    borderRadius: LAYOUT.BUTTON_HEIGHT / 2,
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
