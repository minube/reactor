import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  FONT, LAYOUT, UNIT, SCREEN,
} = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
  },

  row: StyleSheet.flatten([
    STYLE.ROW,
    {
      minHeight: LAYOUT.AVATAR_SMALL,
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
    borderRadius: LAYOUT.AVATAR_SMALL / 2,
    height: LAYOUT.AVATAR_SMALL,
    width: LAYOUT.AVATAR_SMALL,
  },

  avatars: StyleSheet.flatten([
    STYLE.ROW,
    {
      justifyContent: 'space-between',
      paddingLeft: UNIT / 2,
    },
  ]),

  title: {
    fontSize: (() => {
      const {
        TINY, PHONE, SMALL, TABLET, REGULAR,
      } = SCREEN();

      if (TINY || PHONE || TABLET) return UNIT * 2.4;
      if (SMALL || REGULAR) return UNIT * 3;
      return UNIT * 4.8;
    })(),
    marginRight: UNIT,
  },
});
