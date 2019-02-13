import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;
const INPUT_HEIGHT = UNIT * 4.2;
const ITEM_HEIGHT = UNIT * 5.6;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    minHeight: INPUT_HEIGHT,
    paddingLeft: UNIT,
    paddingRight: UNIT * 4.4,
    height: ITEM_HEIGHT,
    // paddingVertical: UNIT,
  },

  texts: {
    marginLeft: UNIT,
  },

  title: {
    lineHeight: UNIT * 2,
  },
});
