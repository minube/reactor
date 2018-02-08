import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, LAYOUT,
} = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
  },

  wrapper: {
    // padding: OFFSET,
    width: '100%',
    alignSelf: 'center',
    ...Platform.select({
      web: {
        maxWidth: LAYOUT.CONTENT_MAX_WIDTH,
      },
    }),
  },
});
