import { Platform, StyleSheet } from 'react-native';
import THEME from './theme';

const {
  COLOR, OFFSET,
} = THEME;

const ROW = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const WRAP = {
  flexWrap: 'wrap',
  alignItems: 'flex-start',
};

export default StyleSheet.create({
  CENTERED: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  COLUMN: {
    display: 'flex',
    flexDirection: 'column',
  },

  ROW,

  WRAP,

  CARDS: {
    ...ROW,
    ...WRAP,
    padding: OFFSET / 2,
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
});
