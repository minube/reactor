import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT * 0.6,
    color: COLOR.TEXT,
  },
});
