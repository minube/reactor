import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, OFFSET } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },

  content: {
    height: '100%',
    padding: OFFSET,
    position: 'absolute',
    width: '100%',
    zIndex: 0,
  },

  buttonBack: {
    left: OFFSET,
    position: 'absolute',
    top: OFFSET,
    zIndex: 1,
  },
});
