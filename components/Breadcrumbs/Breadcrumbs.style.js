import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  link: {
    color: COLOR.TEXT,
    marginRight: UNIT * 0.4,
  },

  container: STYLE.ROW,
});
