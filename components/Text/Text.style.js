import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT,
} = THEME;

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
    fontSize: FONT.SIZE.REGULAR,
  },

  title: {
    fontSize: FONT.SIZE.TITLE,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  subtitle: {
    fontSize: FONT.SIZE.SUBTITLE,
    fontWeight: FONT.WEIGHT.BOLD,
  },
});
