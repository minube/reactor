import Color from 'color';
import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET, UNIT, STYLE,
} = THEME;

export default StyleSheet.create({
  caption: {
    fontSize: FONT.SIZE.TINY,
  },

  container: {
    width: LAYOUT.CARD_MAX_WIDTH,
    height: LAYOUT.CARD_IMAGE_HEIGHT,
    backgroundColor: COLOR.BACKGROUND,
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

  elevation: {
    margin: OFFSET / 2,
    ...STYLE.SHADOW,
  },

  location: {
    position: 'absolute',
    top: UNIT,
    left: UNIT,
    fontSize: FONT.SIZE.TINY,
  },

  opacity: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Color(COLOR.BLACK).alpha(0.35),
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
