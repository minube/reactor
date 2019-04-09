import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

const ICON_SIZE = UNIT * 2;

export default StyleSheet.create({
  container: {
    borderColor: COLOR.TEXT_LIGHTEN,
    borderRadius: ICON_SIZE,
    borderWidth: 2,
    height: ICON_SIZE,
    width: ICON_SIZE,
  },

  active: {
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    borderColor: COLOR.PRIMARY,
    justifyContent: 'center',
  },

  icon: {
    height: ICON_SIZE * 0.7,
    width: ICON_SIZE * 0.7,
  },
});
