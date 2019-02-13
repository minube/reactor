import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  button: {
    position: 'absolute',
    top: UNIT / 2,
    right: 0,
    zIndex: 1,
  },

  container: {
    marginBottom: UNIT * 2.2,
    maxWidth: '100%',
  },

  content: {
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    // paddingVertical: UNIT / 2,
    width: '100%',
  },

  dataSource: {
    // ...LAYOUT.STYLE.SHADOW,
    position: 'absolute',
    backgroundColor: COLOR.WHITE,
    maxHeight: UNIT * 22.6,
    // minHeight: UNIT,
  },

  bottom: {
    bottom: 0,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  marginLabel: {
    marginTop: UNIT * 2.2,
  },

});
