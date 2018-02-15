import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, UNIT,
} = THEME;

export default StyleSheet.create({

  container: {
  },

  content: {
    minHeight: LAYOUT.CARD_PICTURE_HEIGHT,
  },

  item: {
    padding: UNIT,
  },
});
