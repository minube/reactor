import { StyleSheet } from 'react-native';
import THEME from '../../theme';

const { UNIT } = THEME;

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

  ...StyleSheet.create({
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
  }),
};
