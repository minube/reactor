import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT,
} = THEME;

export default StyleSheet.create({
  accent: {
    color: COLOR.ACCENT,
  },

  bold: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
    fontSize: FONT.SIZE.REGULAR,
  },

  primary: {
    color: COLOR.PRIMARY,
  },

  tiny: {
    fontSize: FONT.SIZE.TINY,
  },
});
