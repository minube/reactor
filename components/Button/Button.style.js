import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, BUTTON, COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({

  touchable: {
    alignSelf: 'center',
    margin: UNIT / 2,
    borderRadius: BORDER_RADIUS,
  },

  container: StyleSheet.flatten([
    STYLE.ROW,
    STYLE.CENTERED,
    {
      backgroundColor: COLOR.TEXT,
      height: BUTTON.HEIGHT,
      paddingHorizontal: UNIT * 3,
      borderRadius: BORDER_RADIUS,
      width: 'fit-content',
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
    paddingHorizontal: BUTTON.SMALL_HEIGHT / 3,
  },

  text: {
    color: COLOR.WHITE,
    fontSize: FONT.SIZE.SMALL,
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
