import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginBottom: UNIT / 2,
  },
});
