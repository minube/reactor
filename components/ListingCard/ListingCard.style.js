import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  content: {
    paddingVertical: SPACE.XS,
  },

  rating: {
    marginBottom: SPACE.XXS,
  },

  title: {
    marginVertical: SPACE.XXS,
  },
});
