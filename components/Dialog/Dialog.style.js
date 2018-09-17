import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, OFFSET, UNIT,
} = THEME;

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

  button: {
    position: 'absolute',
    right: -UNIT / 2,
    top: 0,
    zIndex: 1,
  },

  frame: {
    ...LAYOUT.STYLE.SHADOW,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS,
    display: Platform.OS === 'web' ? 'block' : undefined,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    padding: OFFSET,
  },

  children: {
    paddingHorizontal: OFFSET,
    paddingBottom: OFFSET,
  },

  scroll: {
    borderBottomColor: COLOR.BORDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR.BORDER,
    borderTopWidth: 1,
  },
});
