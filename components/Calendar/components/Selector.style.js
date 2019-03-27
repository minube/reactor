import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
    marginBottom: SPACE.MEDIUM,
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
    textTransform: 'capitalize',
  },
});
