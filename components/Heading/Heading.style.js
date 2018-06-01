import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { AVATAR_SMALL, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
  },

  row: {
    ...STYLE.ROW,
    minHeight: AVATAR_SMALL,
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
