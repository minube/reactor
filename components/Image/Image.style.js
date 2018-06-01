import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR } = THEME;

export default StyleSheet.create({
  activity: {
    position: 'absolute',
  },

  container: {
    ...STYLE.CENTERED,
    backgroundColor: COLOR.BACKGROUND,
  },
});
