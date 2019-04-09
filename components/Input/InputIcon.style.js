import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

const ICON_SIZE = UNIT * 2;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: ICON_SIZE,
    height: ICON_SIZE,
    width: ICON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    height: ICON_SIZE * 0.7,
    width: ICON_SIZE * 0.7,
  },
});
