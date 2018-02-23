import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  BUTTON_SMALL_HEIGHT, COLOR, UNIT, OFFSET,
} = THEME;

export default StyleSheet.create({
  button: {
    position: 'absolute',
    marginTop: -(BUTTON_SMALL_HEIGHT / 2),
    top: 0,
    zIndex: 1,
  },

  caption: {
    color: COLOR.TEXT_LIGHTEN,
  },

  container: {
    width: '100%',
  },

  slider: {
    zIndex: -1,
  },

  header: {
    marginBottom: UNIT,
  },

  title: {

  },

  previous: {
    left: -OFFSET,
  },

  next: {
    right: -OFFSET,
  },
});
