import { StyleSheet } from 'react-native';

import { LAYOUT } from '../../../common';

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
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
