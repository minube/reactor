import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({
  container: STYLE.ROW,

  count: {
    color: COLOR.TEXT_LIGHTEN,
    fontSize: FONT.SIZE.TINY,
  },

  rate: {
    color: COLOR.PRIMARY,
    fontSize: FONT.SIZE.SMALL,
    lineHeight: FONT.SIZE.REGULAR,
    marginRight: UNIT * 0.25,
  },
});
