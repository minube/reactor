import { StyleSheet } from 'react-native';

import { THEME } from '../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    height: UNIT,
  },

  value: {
    backgroundColor: COLOR.PRIMARY,
    height: UNIT,
  },
});
