import Color from 'color';
import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET, STYLE,
} = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    height: '100%',
    left: 0,
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
    ...STYLE.CENTERED,
  },

  frame: {
    backgroundColor: COLOR.WHITE,
    minWidth: LAYOUT.DIALOG_MIN_WIDTH,
    maxHeight: '65%',
    ...STYLE.SHADOW,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    fontWeight: FONT.WEIGHT.BOLD,
    padding: OFFSET,
  },

  content: {
    flex: 1,
    paddingHorizontal: OFFSET,
  },

  scroll: {
    borderBottomColor: COLOR.DIVIDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR.DIVIDER,
    borderTopWidth: 1,
  },

  footer: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    padding: OFFSET,
    ...STYLE.ROW,
  },
});
