import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT, FONT } = THEME;
const DOT_SIZE = UNIT * 3.2;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  dot: {
    transform: [
      { translateY: -DOT_SIZE * 0.2 },
    ],
  },

  dotRegular: {
    ...FONT.BUTTON,
    fontSize: DOT_SIZE,
  },

  textRegular: {
    ...FONT.BUTTON,
    fontSize: UNIT * 1.6,
  },

  dotLarge: {
    fontSize: UNIT * 5.4,
    letterSpacing: UNIT * 0.12,
  },
});
