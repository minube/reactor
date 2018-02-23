import Color from 'color';
import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({
  caption: {
    fontSize: FONT.SIZE.TINY,
  },

  image: {
    borderRadius: BORDER_RADIUS,
  },

  content: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      width: '100%',
      height: '100%',
      padding: UNIT,
    },
  ]),

  contentBottom: {
    position: 'absolute',
    left: UNIT,
    bottom: UNIT,
  },

  small: {
    height: UNIT * 10,
  },

  location: {
    position: 'absolute',
    top: UNIT,
    left: UNIT,
    fontSize: FONT.SIZE.TINY,
  },

  opacity: {
    backgroundColor: Color(COLOR.BLACK).alpha(0.35),
    borderRadius: BORDER_RADIUS,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },

  text: {
    zIndex: 1,
    color: COLOR.WHITE,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    marginBottom: UNIT / 2,
  },
});
