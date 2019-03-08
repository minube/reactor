import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
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
    marginBottom: SPACE.XS,
  },

  previous: {
    left: -SPACE.MEDIUM,
  },

  next: {
    right: -SPACE.MEDIUM,
  },
});
