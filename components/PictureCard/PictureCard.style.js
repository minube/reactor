import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.CONTENT,
    borderRadius: BORDER_RADIUS,
  },

  image: {
    borderRadius: BORDER_RADIUS,
    opacity: 0.8,
  },

  content: {
    ...STYLE.CENTERED,
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
