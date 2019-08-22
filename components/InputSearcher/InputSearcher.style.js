import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, UNIT, SPACE,
} = THEME;

const HEIGHT = UNIT * 4.4;

export default StyleSheet.create({
  list: {
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: SPACE.S,
    position: 'absolute',
    top: HEIGHT,
    width: '100%',
  },

  item: {
    paddingVertical: SPACE.XXS,
  },
});
