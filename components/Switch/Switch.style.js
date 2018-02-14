import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT,
} = THEME;

export default StyleSheet.create({

  container: StyleSheet.flatten([
    STYLE.ROW,
    {
      height: LAYOUT.INPUT_HEIGHT,
    },
  ]),

  label: {
    color: COLOR.BASE,
    fontSize: FONT.SIZE.SMALL,
    marginRight: UNIT,
  },

  disabled: {
    color: COLOR.BASE,
  },

  switch: {
    height: UNIT * 2.4,
  },
});
