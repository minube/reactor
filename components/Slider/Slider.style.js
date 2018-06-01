import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT, OFFSET } = THEME;

export default StyleSheet.create({
  caption: {
    color: COLOR.TEXT_LIGHTEN,
  },

  container: {
    width: '100%',
  },

  navigation: {
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
  },

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
