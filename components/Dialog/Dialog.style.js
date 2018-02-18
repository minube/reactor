import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, LAYOUT, OFFSET,
} = THEME;

export default StyleSheet.create({
  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      backgroundColor: 'rgba(0,0,0, 0.5)',
      height: '100%',
      left: 0,
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
      top: 0,
      width: '100%',
      zIndex: 2,
    },
  ]),

  frame: StyleSheet.flatten([
    STYLE.SHADOW,
    {
      backgroundColor: COLOR.WHITE,
      borderRadius: BORDER_RADIUS,
      minWidth: LAYOUT.DIALOG_MIN_WIDTH,
      maxHeight: '65%',
    },
  ]),

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

  footer: StyleSheet.flatten([
    STYLE.ROW,
    {
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      padding: OFFSET,
    },
  ]),
});
