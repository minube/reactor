import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, LAYOUT, UNIT, OFFSET,
} = THEME;

export default StyleSheet.create({
  button: {
    position: 'absolute',
    marginTop: -(LAYOUT.BUTTON_SMALL_HEIGHT / 2),
    top: 0,
    zIndex: 1,
  },

  caption: {
    color: COLOR.TEXT_LIGHTEN,
  },

  container: {
    width: '100%',
  },

  content: {
    minHeight: LAYOUT.CARD_PICTURE_HEIGHT,
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
