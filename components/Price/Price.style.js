import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  minimize: {
    transform: [{ scale: 0.8 }],
  },

  symbol: {
    marginLeft: SPACE.XXS,
  },
});
