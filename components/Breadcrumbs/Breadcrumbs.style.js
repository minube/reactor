import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  link: {
    color: COLOR.TEXT,
    marginRight: SPACE.XXS,
  },

  container: LAYOUT.STYLE.ROW,
});
