import { Platform, StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, OFFSET,
} = THEME;

export default StyleSheet.create({
  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      height: '100%',
      left: 0,
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
      top: 0,
      width: '100%',
      zIndex: 2,
    },
  ]),

  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  frame: StyleSheet.flatten([
    STYLE.SHADOW,
    {
      backgroundColor: COLOR.WHITE,
      borderRadius: BORDER_RADIUS,
      minWidth: '35%',
      maxHeight: '65%',
    },
  ]),

  title: {
    flex: 1,
    fontSize: FONT.SIZE.LARGE,
    padding: OFFSET,
  },

  children: {
    flex: 1,
    paddingHorizontal: OFFSET,
  },

  scroll: {
    borderBottomColor: COLOR.DIVIDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR.DIVIDER,
    borderTopWidth: 1,
  },

  buttons: StyleSheet.flatten([
    STYLE.ROW,
    {
      padding: OFFSET,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'flex-end',
    },
  ]),
});
