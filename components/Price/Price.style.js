import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { FONT } = THEME;

export default StyleSheet.create({
  container: STYLE.ROW,

  containerSmall: {
    transform: [{ scale: 0.80 }],
  },

  symbol: {
    alignSelf: 'flex-end',
    transform: [{ scale: 0.75 }],
  },
});
