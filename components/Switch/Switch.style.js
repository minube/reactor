import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  INPUT_HEIGHT, UNIT, OFFSET,
} = THEME;

export default StyleSheet.create({

  container: {
    ...STYLE.ROW,
    height: INPUT_HEIGHT,
    marginBottom: OFFSET,
  },

  label: {
    marginRight: UNIT,
  },

  switch: {
    height: UNIT * 2.4,
  },
});
