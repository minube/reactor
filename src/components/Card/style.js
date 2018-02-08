import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    margin: OFFSET / 2,
    width: LAYOUT.CARD_MAX_WIDTH,
  },

  image: {
    backgroundColor: COLOR.BACKGROUND,
    width: LAYOUT.CARD_MAX_WIDTH,
    height: LAYOUT.CARD_IMAGE_HEIGHT,
  },

  placeholder: {
    width: LAYOUT.CARD_MAX_WIDTH / 3,
    height: LAYOUT.CARD_MAX_WIDTH / 2,
  },

  content: {
    padding: UNIT,
  },

  highlight: {
    color: COLOR.WHITE,
  },

  rating: {
    width: FONT.SIZE.SMALL,
    height: FONT.SIZE.SMALL,
    tintColor: COLOR.PRIMARY,
  },

  title: {
    fontSize: FONT.SIZE.REGULAR,
    marginBottom: UNIT / 2,
  },

  description: {
    fontSize: FONT.SIZE.TINY,
  },

  commentContent: {
    alignItems: 'flex-start',
    marginTop: UNIT,
  },

  avatar: {
    width: LAYOUT.AVATAR_SMALL,
    height: LAYOUT.AVATAR_SMALL,
    borderRadius: LAYOUT.AVATAR_SMALL / 2,
    marginRight: UNIT,
    backgroundColor: COLOR.BACKGROUND,
  },

  comment: {
    fontSize: FONT.SIZE.TINY,
    opacity: 0.35,
    maxHeight: FONT.SIZE.TINY * 3.6,
    overflow: 'hidden',
    width: '87.5%',
  },
});
