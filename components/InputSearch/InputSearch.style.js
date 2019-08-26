import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, UNIT, SPACE,
} = THEME;

const HEIGHT = UNIT * 4.4;
const HEIGHT_LABEL = UNIT * 6.8;

export default StyleSheet.create({
  input: {
    width: '100%',
  },

  item: {
    paddingVertical: SPACE.XXS,
  },

  list: {
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: SPACE.S,
    position: 'absolute',
    zIndex: 2,
    width: '100%',
  },

  marginList: {
    top: HEIGHT,
  },

  marginListLabel: {
    top: HEIGHT_LABEL,
  },
});
