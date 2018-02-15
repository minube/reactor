import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT,
} = THEME;

export default StyleSheet.create({
  bold: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
    fontSize: FONT.SIZE.REGULAR,
  },

  tiny: {
    fontSize: FONT.SIZE.TINY,
  },

  small: {
    fontSize: FONT.SIZE.SMALL,
  },

  large: {
    fontSize: FONT.SIZE.LARGE,
  },
});
