import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

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
    paddingVertical: SPACE.MEDIUM,
  },

  border: {
    borderBottomWidth: 1,
    borderColor: COLOR.BASE,
  },

  list: {
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS,
    maxHeight: UNIT * 50,
    overflow: 'scroll',
    paddingHorizontal: SPACE.MEDIUM,
    position: 'absolute',
    width: '100%',
    zIndex: 3,
    borderColor: COLOR.BASE,
    borderWidth: UNIT * 0.1,
    transform: [{ translateY: -UNIT * 0.1 }],
  },

  marginList: {
    top: HEIGHT,
  },

  marginListLabel: {
    top: HEIGHT_LABEL,
  },
});
