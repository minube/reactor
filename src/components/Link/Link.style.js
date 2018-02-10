import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET, UNIT, STYLE,
} = THEME;

export default StyleSheet.create({
  container: {
    fontSize: FONT.SIZE.REGULAR,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  hover: {
    color: COLOR.ACCENT,
  },
});
