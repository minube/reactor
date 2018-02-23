import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({
  caption: {
    fontSize: FONT.SIZE.TINY,
    color: COLOR.TEXT_LIGHTEN,
  },

  container: {
    overflow: 'hidden',
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
