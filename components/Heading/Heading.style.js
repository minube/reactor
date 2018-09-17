import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
  },

  row: {
    ...STYLE.ROW,
    minHeight: UNIT * 2,
  },

  column: {
  },

  contributors: {
    ...STYLE.ROW,
    justifyContent: 'flex-end',
    flex: 1,
  },

  avatars: STYLE.ROW,

  avatar: {
    marginLeft: UNIT / 2,
  },

  title: {
    marginRight: UNIT,
  },
});
