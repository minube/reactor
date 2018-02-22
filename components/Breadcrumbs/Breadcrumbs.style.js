import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT, SCREEN,
} = THEME;

export default StyleSheet.create({
  link: {
    marginRight: UNIT / 2.25,
  },

  container: STYLE.ROW,
});
