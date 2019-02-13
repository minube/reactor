import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;
const INPUT_HEIGHT = UNIT * 4.2;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    minHeight: INPUT_HEIGHT,
    paddingHorizontal: UNIT,
    paddingVertical: UNIT / 2,
  },

  texts: {
    marginLeft: UNIT,
  },
});
