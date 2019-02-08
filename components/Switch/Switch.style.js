import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    alignSelf: 'flex-end',
    height: UNIT * 4.4,
    marginBottom: UNIT * 2.4,
  },

  label: {
    marginBottom: 0,
  },

  switch: {
    height: UNIT * 2.8,
  },
});
