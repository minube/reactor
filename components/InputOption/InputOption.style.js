import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT } = THEME;

const SIZE = UNIT * 2;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  icon: {
    height: SIZE * 0.6,
    width: SIZE * 0.6,
  },

  label: {
    marginLeft: UNIT,
    ...Platform.select({
      web: {
        userSelect: 'none',
      },
    }),
  },

  option: {
    ...LAYOUT.STYLE.CENTERED,
    height: SIZE,
    width: SIZE,

    borderWidth: 2,
    borderColor: COLOR.TEXT_LIGHTEN,
    borderRadius: SIZE / 10,
  },

  rounded: {
    borderRadius: SIZE / 2,
  },

  selected: {
    borderColor: COLOR.PRIMARY,
    backgroundColor: COLOR.PRIMARY,
  },
});
