import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
    marginBottom: UNIT / 2,
  },

  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  touchableDisabled: {
    opacity: 0.1,
  },

  value: {
    flex: 1,
    textAlign: 'center',
  },
});
