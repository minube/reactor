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
