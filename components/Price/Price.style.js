import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  FONT, STYLE,
} = THEME;

export default StyleSheet.create({
  container: {
    ...STYLE.ROW,
  },

  containerSmall: {
    transform: [{ scale: 0.80 }],
  },

  text: {
    fontSize: FONT.SIZE.LARGE,
  },

  value: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  symbol: {
    alignSelf: 'flex-end',
    fontWeight: FONT.WEIGHT.REGULAR,
    transform: [{ scale: 0.75 }],
  },
});
