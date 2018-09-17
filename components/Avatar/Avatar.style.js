import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT } = THEME;

const SMALL = UNIT * 2;
const REGULAR = UNIT * 4;
const LARGE = UNIT * 6;

export default StyleSheet.create({
  image: {
    borderRadius: REGULAR / 2,
    height: REGULAR,
    width: REGULAR,
  },

  small: {
    borderRadius: SMALL / 2,
    height: SMALL,
    width: SMALL,
  },

  large: {
    borderRadius: LARGE / 2,
    height: LARGE,
    width: LARGE,
  },
});
