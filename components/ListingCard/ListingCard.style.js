import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT,
} = THEME;

export default StyleSheet.create({
  caption: {
    fontSize: FONT.SIZE.TINY,
    color: COLOR.TEXT_LIGHTEN,
  },

  container: {
    overflow: 'hidden',
    width: LAYOUT.CARD_WIDTH,
  },

  content: {
    paddingVertical: UNIT,
  },

  rating: {
    marginBottom: UNIT / 2,
  },

  title: {
    color: COLOR.TEXT,
    fontSize: FONT.SIZE.SMALL,
    fontWeight: FONT.WEIGHT.BOLD,
    marginVertical: UNIT / 2,
  },
});
