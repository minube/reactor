import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  minimize: {
    transform: [{ scale: 0.8 }],
  },

  symbol: {
    marginLeft: UNIT * 0.4,
  },
});
