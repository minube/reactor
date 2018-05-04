import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, OFFSET } = THEME;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    backgroundColor: COLOR.WHITE,
  },

  content: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: OFFSET,
    zIndex: 0,
  },

  buttonBack: {
    position: 'absolute',
    top: OFFSET,
    left: OFFSET,
    zIndex: 1,
  },
});
