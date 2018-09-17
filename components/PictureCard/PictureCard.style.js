import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, UNIT } = THEME;

export default StyleSheet.create({
  content: {
    backgroundColor: COLOR.CONTENT,
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
    padding: UNIT,
    alignSelf: 'center',
  },

  small: {
    height: UNIT * 10,
  },

  text: {
    color: COLOR.WHITE,
    textAlign: 'center',
  },

  title: {
    marginBottom: UNIT / 2,
  },
});
