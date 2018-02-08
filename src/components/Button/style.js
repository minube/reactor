import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, FONT, LAYOUT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    // display: 'flex',
    paddingVertical: UNIT,
    paddingHorizontal: OFFSET,
    margin: UNIT / 2,
  },

  accent: {
    backgroundColor: COLOR.ACCENT,
  },

  floating: {
    width: LAYOUT.HEADER_HEIGHT,
    height: LAYOUT.HEADER_HEIGHT,
    borderRadius: LAYOUT.HEADER_HEIGHT / 2,
  },

  disabled: {
    backgroundColor: COLOR.BORDER,
  },

  activity: {
    marginRight: UNIT,
  },

  text: {
    color: COLOR.PRIMARY,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  textHighlight: {
    color: COLOR.WHITE,
  },

  textDisabled: {
    color: COLOR.CONTENT,
  },

  icon: {
    width: FONT.SIZE.REGULAR,
    height: FONT.SIZE.REGULAR,
    marginRight: UNIT,
  },

  iconFloating: {
    width: FONT.SIZE.LARGE,
    height: FONT.SIZE.LARGE,
  },
});
