import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: UNIT / 2,
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
  },
});
