import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, OFFSET, UNIT,
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

  touchable: {
    position: 'absolute',
    right: OFFSET / 2,
    top: OFFSET / 2,
    zIndex: 1,
  },

  icon: {
    width: UNIT * 3.6,
    height: UNIT * 3.6,
    opacity: 0.5,
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
    // padding: OFFSET,
    paddingBottom: OFFSET,
  },

  scroll: {
    borderBottomColor: COLOR.DIVIDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR.DIVIDER,
    borderTopWidth: 1,
  },
});
