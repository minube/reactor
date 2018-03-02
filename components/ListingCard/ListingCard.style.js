import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  content: {
    paddingVertical: UNIT,
  },

  rating: {
    marginBottom: UNIT / 2,
  },

  title: {
    marginVertical: UNIT / 2,
  },
});
