import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, OFFSET,
} = THEME;

export default StyleSheet.create({
  container: {
    ...STYLE.CENTERED,
    height: '100%',
    left: 0,
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },

  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  children: {
    paddingHorizontal: OFFSET,
    paddingBottom: OFFSET,
  },

  frame: {
    ...STYLE.SHADOW,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS,
    display: Platform.OS === 'web' ? 'block' : undefined,
  },

  header: {
    ...STYLE.ROW,
    justifyContent: 'flex-end',
  },

  safeArea: {
    flex: 1,
    maxHeight: Platform.OS === 'web' ? '100vh' : '100%',
  },

  scroll: {
    borderBottomColor: COLOR.BORDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR.BORDER,
    borderTopWidth: 1,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    flex: 1,
    padding: OFFSET,
  },
});
