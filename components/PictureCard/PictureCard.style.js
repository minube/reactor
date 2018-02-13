import Color from 'color';
import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT, STYLE,
} = THEME;

export default StyleSheet.create({
  caption: {
    fontSize: FONT.SIZE.TINY,
  },

  container: {
    backgroundColor: COLOR.BACKGROUND,
    borderRadius: LAYOUT.BORDER_RADIUS,
    width: LAYOUT.CARD_WIDTH,
    height: LAYOUT.CARD_PICTURE_HEIGHT,
  },

  content: {
    width: '100%',
    height: '100%',
    padding: UNIT,
    ...STYLE.CENTERED,
  },

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
    borderRadius: LAYOUT.BORDER_RADIUS,
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
