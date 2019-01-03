import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    height: UNIT * 3.9,
    marginBottom: UNIT,
    alignSelf: 'flex-end',
  },

  switch: {
    height: UNIT * 2.4,
    marginRight: UNIT,
  },
});
