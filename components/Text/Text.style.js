import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT,
} = THEME;

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
  },
});
