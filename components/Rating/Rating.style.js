import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { FONT, UNIT } = THEME;

export default StyleSheet.create({
  container: STYLE.ROW,

  rate: {
    lineHeight: FONT.SIZE.REGULAR,
    marginRight: UNIT * 0.25,
  },
});
