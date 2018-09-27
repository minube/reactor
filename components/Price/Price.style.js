import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { FONT } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  minimize: {
    fontWeight: FONT.WEIGHT.SEMIBOLD,
    transform: [{ scale: 0.8 }],
  },
});
