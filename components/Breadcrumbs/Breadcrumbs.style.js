import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  link: {
    color: COLOR.TEXT,
    marginRight: UNIT * 0.4,
  },

  container: LAYOUT.STYLE.ROW,
});
