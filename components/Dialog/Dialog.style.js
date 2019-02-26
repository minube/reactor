import { StyleSheet } from 'react-native';

import { LAYOUT, THEME, ENV } from '../../common';

const {
  BORDER_RADIUS, COLOR, ELEVATION, OFFSET,
} = THEME;

export default StyleSheet.create({
  container: {
    height: '100%',
    left: 0,
    maxHeight: ENV.IS_WEB ? '100vh' : '100%',
    position: ENV.IS_WEB ? 'fixed' : 'absolute',
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
    ...ELEVATION.LARGE,
    backgroundColor: COLOR.BACKGROUND,
    borderRadius: BORDER_RADIUS,
  },

  header: {
    ...LAYOUT.STYLE.ROW,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  safeArea: {
    ...LAYOUT.STYLE.CENTERED,
    flex: 1,
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
