import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  INPUT_HEIGHT, UNIT,
} = THEME;

export default StyleSheet.create({

  container: StyleSheet.flatten([
    STYLE.ROW,
    {
      height: INPUT_HEIGHT,
    },
  ]),

  label: {
    marginRight: UNIT,
  },

  switch: {
    height: UNIT * 2.4,
  },
});
