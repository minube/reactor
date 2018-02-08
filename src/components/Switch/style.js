import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT,
} = THEME;

export default StyleSheet.create({

  container: {
    height: LAYOUT.INPUT_HEIGHT,
  },

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
