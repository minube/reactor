import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({

  container: {
    ...LAYOUT.STYLE.ROW,
    height: UNIT * 4.4,
    marginBottom: UNIT,
  },

  label: {
    marginRight: UNIT,
  },

  switch: {
    height: UNIT * 2.4,
  },
});
