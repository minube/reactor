import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, OFFSET } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    left: 0,
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },

  content: {
    height: '100%',
    padding: OFFSET,
    width: '100%',
    zIndex: 0,
  },

  safeArea: {
    flex: 1,
  },
});
