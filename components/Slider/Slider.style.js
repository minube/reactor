import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, UNIT, OFFSET,
} = THEME;

export default StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
  },

  caption: {
    color: COLOR.TEXT_LIGHTEN,
  },

  container: {
    width: '100%',
  },

  navigation: StyleSheet.flatten([
    STYLE.ROW,
    {
      height: 0,
      justifyContent: 'space-between',
      left: 0,
      overflow: 'visible',
      position: 'absolute',
      width: Platform.OS === 'web' ? '100%' : '50%',
      zIndex: 1,
    },
  ]),

  header: {
    marginBottom: UNIT,
  },

  previous: {
    left: -OFFSET,
  },

  next: {
    right: -OFFSET,
  },
});
