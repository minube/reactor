import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
    marginVertical: UNIT / 2,
  },

  content: {
    flex: 1,
    textAlign: 'center',
  },
});
