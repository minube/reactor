import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { FONT, UNIT } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  rate: {
    lineHeight: FONT.SIZE.REGULAR,
    marginRight: UNIT * 0.25,
  },
});
