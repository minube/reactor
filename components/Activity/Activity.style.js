import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT } = THEME;

const SIZE = UNIT * 0.6;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  dot: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR.TEXT,
    marginHorizontal: SIZE / 4,
  },

  large: {
    width: SIZE * 2,
    height: SIZE * 2,
    borderRadius: SIZE,
  },
});
