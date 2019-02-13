import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: UNIT * 2.2,
    maxWidth: '100%',
    overflow: 'hidden',
  },

  content: {
    paddingVertical: UNIT / 2,
  },

  dataSource: {
    // position: 'absolute',
    backgroundColor: 'orange',
    maxHeight: UNIT * 16,
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    width: '100%',
  },

  inputError: {
    borderColor: COLOR.ERROR,
  },

  inputDisabled: {
    backgroundColor: COLOR.DISABLED,
  },
});
