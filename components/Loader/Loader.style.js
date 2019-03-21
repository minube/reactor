import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT, FONT } = THEME;

export default StyleSheet.create({
  container: {
    ...FONT.BUTTON,
    flexDirection: 'row',
  },

  regular: {
    ...FONT.BUTTON,
    fontSize: UNIT * 1.6,
  },

  large: {
    fontSize: UNIT * 6,
  },
});
