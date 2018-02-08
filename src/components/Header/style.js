import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET,
} = THEME;

export default StyleSheet.create({
  header: {
    zIndex: 1,
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    backgroundColor: COLOR.WHITE,
    height: LAYOUT.HEADER_HEIGHT,
    paddingHorizontal: OFFSET,
    width: '100%',
  },

  content: {
    flex: 1,
  },

  text: {
    fontSize: FONT.SIZE.LARGE,
  },

  title: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  description: {
    fontWeight: FONT.WEIGHT.LIGHT,
    opacity: 0.75,
  },

  children: {
    flex: 0,
    marginLeft: LAYOUT.HEADER_HEIGHT / 2,
    marginTop: LAYOUT.HEADER_HEIGHT,
  },

  loading: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  }
});
