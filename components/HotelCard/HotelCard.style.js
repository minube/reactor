import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT, LAYOUT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    margin: OFFSET / 2,
    width: '100%',
    maxWidth: LAYOUT.CARD_MAX_WIDTH * 4,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },

  empty: {
    borderColor: COLOR.BORDER,
    borderWidth: 1,
  },

  content: {
    flex: 1,
    minHeight: '100%',
    padding: OFFSET,
  },

  right: {
    minHeight: '100%',
    borderLeftColor: COLOR.BORDER,
    borderLeftWidth: 1,
    padding: UNIT,
    width: LAYOUT.CARD_MAX_WIDTH / 1.35,
  },


  dealPrice: {
    fontSize: FONT.SIZE.REGULAR * 2,
    color: COLOR.TEXT_LIGHTEN,
  },

  title: {
    fontSize: FONT.SIZE.LARGE,
    fontWeight: FONT.WEIGHT.BOLD,
    marginBottom: UNIT / 2,
  },

  caption: {
    color: COLOR.TEXT_LIGHTEN,
    fontSize: FONT.SIZE.SMALL,
  },

  proposals: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },

  proposal: {
    borderBottomColor: COLOR.BORDER,
    borderBottomWidth: 1,
    marginBottom: UNIT,
    marginRight: OFFSET,
    paddingBottom: UNIT / 4,
    maxWidth: LAYOUT.CARD_MAX_WIDTH,
  },

  proposalName: {
    fontSize: FONT.SIZE.SMALL,
    fontWeight: FONT.WEIGHT.BOLD,
    marginBottom: UNIT / 2,
  },

  proposalPrice: {
    color: COLOR.ACCENT,
    fontSize: FONT.SIZE.SMALL,
    paddingLeft: OFFSET,
    alignSelf: 'flex-start',
  },

  comment: {
    color: COLOR.TEXT_LIGHTEN,
    fontSize: FONT.SIZE.TINY,
    marginVertical: UNIT,
  },
});
