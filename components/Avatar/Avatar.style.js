import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { AVATAR: { REGULAR, SMALL, LARGE } } = THEME;

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
