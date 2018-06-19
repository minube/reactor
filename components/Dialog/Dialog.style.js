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

  iconClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: OFFSET,
    opacity: 0.5,
    zIndex: 1,
  },

  frame: {
    ...STYLE.SHADOW,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    padding: OFFSET,
  },

  children: {
    paddingHorizontal: OFFSET,
  },

  scroll: {
    borderBottomColor: COLOR.DIVIDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR.DIVIDER,
    borderTopWidth: 1,
  },

  buttons: {
    ...STYLE.ROW,
    padding: OFFSET,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
});
