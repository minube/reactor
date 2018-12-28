import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
  },

  row: {
    ...LAYOUT.STYLE.ROW,
    minHeight: UNIT * 2,
  },

  column: {
  },

  contributors: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'flex-end',
    flex: 1,
  },

  avatars: LAYOUT.STYLE.ROW,

  avatar: {
    marginLeft: UNIT / 2,
  },

  title: {
    marginRight: UNIT,
  },
});
