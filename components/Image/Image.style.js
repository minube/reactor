import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR } = THEME;

export default StyleSheet.create({
  activity: {
    position: 'absolute',
  },

  container: {
    ...LAYOUT.STYLE.CENTERED,
    backgroundColor: COLOR.BACKGROUND,
  },
});
