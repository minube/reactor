import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { UNIT, OFFSET } = THEME;

export default StyleSheet.create({

  container: {
    ...STYLE.ROW,
    height: UNIT * 4.4,
    marginBottom: OFFSET,
  },

  label: {
    marginRight: UNIT,
  },

  switch: {
    height: UNIT * 2.4,
  },
});
