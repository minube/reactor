import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT,
} = THEME;

export default StyleSheet.create({
  accent: {
    color: COLOR.ACCENT,
  },

  lighter: {
    fontWeight: FONT.WEIGHT.LIGHTER,
  },

  semibold: {
    fontWeight: FONT.WEIGHT.SEMIBOLD,
  },

  bold: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
    fontSize: FONT.SIZE.REGULAR,
  },

  lighten: {
    color: COLOR.TEXT_LIGHTEN,
  },

  primary: {
    color: COLOR.PRIMARY,
  },

  tiny: {
    fontSize: FONT.SIZE.TINY,
  },
});
