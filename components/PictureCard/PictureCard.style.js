import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, UNIT, SPACE,
} = THEME;

export default StyleSheet.create({
  content: {
    backgroundColor: COLOR.BASE,
  },

  borderRadius: {
    borderRadius: BORDER_RADIUS,
  },

  image: {
    opacity: 0.8,
  },

  info: {
    ...LAYOUT.STYLE.CENTERED,
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '100%',
    padding: SPACE.XS,
    alignSelf: 'center',
  },

  small: {
    height: UNIT * 10,
  },

  text: {
    color: COLOR.WHITE,
    textAlign: 'center',
  },
});
