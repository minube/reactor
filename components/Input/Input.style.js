import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  COLOR, FONT, UNIT, SPACE,
} = THEME;

const ICON_SIZE = UNIT * 2;
const INPUT_HEIGHT = UNIT * 4.2;

export { INPUT_HEIGHT };

export default StyleSheet.create({
  container: {
    marginBottom: SPACE.REGULAR,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    paddingHorizontal: SPACE.XXS,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  focus: {
    borderColor: COLOR.PRIMARY,
  },

  icon: {
    height: ICON_SIZE,
    marginRight: SPACE.XXS,
    width: ICON_SIZE,
  },

  inlineHint: {
    ...LAYOUT.STYLE.ROW,
    paddingHorizontal: SPACE.XXS,
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    color: COLOR.TEXT,
    flex: 1,
    fontSize: UNIT * 1.6,
    minHeight: INPUT_HEIGHT,
    paddingHorizontal: SPACE.XXS,
    paddingVertical: UNIT * 0.75,
    width: '100%',
    ...FONT.INPUT,
  },

  inputDisabled: {
    color: COLOR.TEXT_LIGHTEN,
  },

  inputCurrency: {
    textAlign: 'right',
  },

  multiline: {
    paddingVertical: SPACE.XXS,
  },

  valid: {
    borderColor: COLOR.PRIMARY,
  },
});
