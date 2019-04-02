import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';
import { BOX_SIZE } from './Week.style';

const { SPACE } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginVertical: SPACE.XXS,
    marginBottom: SPACE.S,
  },

  box: {
    textAlign: 'center',
    minWidth: BOX_SIZE,
  },

  boxExpand: {
    flex: 1,
  },
});
