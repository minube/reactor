import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  rate: {
    marginRight: UNIT * 0.25,
  },
});
