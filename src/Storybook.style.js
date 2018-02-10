import { Platform, StyleSheet } from 'react-native';

import { THEME } from './common';

const {
  COLOR, FONT, LAYOUT, OFFSET,
} = THEME;

export default StyleSheet.create({

  container: {
    backgroundColor: COLOR.BACKGROUND,
    padding: OFFSET,
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

  content: {
    padding: OFFSET,
    flexWrap: 'wrap',
    backgroundColor: COLOR.WHITE,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    marginTop: OFFSET * 2,
    marginBottom: OFFSET,
    color: COLOR.PRIMARY,
    width: '100%',
  },

  listItemTitle: {
    fontSize: FONT.SIZE.DEFAULT,
  },

  listItemDescription: {
    fontSize: FONT.SIZE.SMALL,
    color: COLOR.BASE,
  },

});
