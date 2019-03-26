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
    backgroundColor: COLOR.PRIMARY,
    marginHorizontal: SIZE / 2,
  },

  large: {
    width: UNIT,
    height: UNIT,
    borderRadius: SIZE,
    marginHorizontal: SIZE / 1.1,
  },
});
