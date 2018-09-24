import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.TRANSPARENT,
    height: UNIT * 2,
    width: UNIT * 2,
  },
});
