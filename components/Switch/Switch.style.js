import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, INPUT_HEIGHT, UNIT,
} = THEME;

export default StyleSheet.create({

  container: StyleSheet.flatten([
    STYLE.ROW,
    {
      height: INPUT_HEIGHT,
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
