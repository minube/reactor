import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.CENTERED,
    backgroundColor: COLOR.BACKGROUND,
  },

  skeleton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});
