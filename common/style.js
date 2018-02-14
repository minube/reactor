import { Platform } from 'react-native';
import THEME from './theme';

const {
  COLOR,
} = THEME;

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
};
