import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { AVATAR_SMALL, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
  },

  row: StyleSheet.flatten([
    STYLE.ROW,
    {
      minHeight: AVATAR_SMALL,
    },
  ]),

  column: {
  },

  contributors: StyleSheet.flatten([
    STYLE.ROW,
    {
      justifyContent: 'flex-end',
      flex: 1,
    },
  ]),

  avatar: {
    borderRadius: AVATAR_SMALL / 2,
    height: AVATAR_SMALL,
    width: AVATAR_SMALL,
  },

  avatars: StyleSheet.flatten([
    STYLE.ROW,
    {
      justifyContent: 'space-between',
      paddingLeft: UNIT / 2,
    },
  ]),

  title: {
    marginRight: UNIT,
  },
});
