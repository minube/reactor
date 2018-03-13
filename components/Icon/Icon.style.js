import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.TRANSPARENT,
    height: FONT.SIZE.LARGE,
    width: FONT.SIZE.LARGE,
  },
});
