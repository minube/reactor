import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, OFFSET } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.CENTERED,
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
    ...LAYOUT.STYLE.SHADOW,
    backgroundColor: COLOR.BACKGROUND,
    borderRadius: BORDER_RADIUS,
    display: Platform.OS === 'web' ? 'block' : undefined,
  },

  header: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'flex-end',
  },

  safeArea: {
    flex: 1,
    maxHeight: Platform.OS === 'web' ? '100vh' : '100%',
  },

  scroll: {
    borderBottomColor: COLOR.BASE,
    borderBottomWidth: 1,
    borderTopColor: COLOR.BASE,
    borderTopWidth: 1,
  },

  title: {
    flex: 1,
    padding: OFFSET,
  },
});
