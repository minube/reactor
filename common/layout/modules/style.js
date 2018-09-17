import { Platform, StyleSheet } from 'react-native';
import THEME from '../../theme';

const { COLOR, FONT, UNIT } = THEME;

export default {
  CENTERED: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  COLUMN: {
    display: 'flex',
    flexDirection: 'column',
  },

  ROW: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  SHADOW: {
    shadowColor: COLOR.BLACK,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    ...Platform.select({
      android: { elevation: 4 },
    }),
  },

  ...StyleSheet.create({

    buttonRegular: { minWidth: UNIT * 4.5, height: UNIT * 4.5, paddingHorizontal: UNIT * 3 },
    buttonSmall: { minWidth: UNIT * 3, height: UNIT * 3, paddingHorizontal: UNIT * 1.5 },

    cardHeightSmall: { height: UNIT * 13.9 },
    cardHeightRegular: { height: UNIT * 19 },
    cardHeightPortraitTiny: { height: UNIT * 17 },
    cardHeightPortraitSmall: { height: UNIT * 19.6 },
    cardHeightPortraitRegular: { height: UNIT * 22 },
    cardHeightPortraitDefault: { height: UNIT * 25 },
    cardWidthTiny: { width: UNIT * 13 },
    cardWidthSmall: { width: UNIT * 15 },
    cardWidthRegular: { width: UNIT * 16.8 },
    cardWidthDefault: { width: UNIT * 23.6 },

    textGnome: { fontSize: FONT.SIZE.GNOME, lineHeight: FONT.SIZE.GNOME * 1.2 },
    textTiny: { fontSize: FONT.SIZE.TINY, lineHeight: FONT.SIZE.TINY * 1.2 },
    textSmall: { fontSize: FONT.SIZE.SMALL, lineHeight: FONT.SIZE.SMALL * 1.2 },
    textRegular: { fontSize: FONT.SIZE.REGULAR, lineHeight: FONT.SIZE.REGULAR * 1.3 },
    textLarge: { fontSize: FONT.SIZE.LARGE, lineHeight: FONT.SIZE.LARGE * 1.3 },
    textSubtitle: { fontSize: FONT.SIZE.SUBTITLE, lineHeight: FONT.SIZE.SUBTITLE * 1.3 },
    textTitle: { fontSize: FONT.SIZE.TITLE, lineHeight: FONT.SIZE.TITLE * 1.3 },
  }),
};
