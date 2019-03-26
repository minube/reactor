import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT, SPACE } = THEME;

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
    marginLeft: SPACE.XXS,
  },

  title: {
    marginRight: SPACE.XS,
  },
});
