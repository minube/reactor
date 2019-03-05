import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';
import { BOX_SIZE } from './Week.style';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginVertical: UNIT / 2,
  },

  box: {
    textAlign: 'center',
    minWidth: BOX_SIZE,
  },

  boxExpand: {
    flex: 1,
  },
});
