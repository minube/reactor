import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, INPUT_HEIGHT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    width: 375,
    height: 667,
    backgroundColor: COLOR.CONTENT,
    overflow: 'hidden',
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
