import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, UNIT, SCREEN,
} = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
  },

  content: StyleSheet.flatten([
    STYLE.ROW,
    {
    },
  ]),

  contributors: StyleSheet.flatten([
    STYLE.ROW,
    {
      // alignItems: 'flex-end',
      // alignContent: 'flex-end',
      justifyContent: 'flex-end',
      flex: 1,
    },
  ]),

  rating: {
    fontSize: FONT.SIZE.REGULAR,
  },

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

  breadcrumb: {
    color: COLOR.TEXT_LIGHTEN,
    marginRight: UNIT / 2.25,
  },
});
