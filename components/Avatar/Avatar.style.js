import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { AVATAR: { REGULAR, SMALL, LARGE } } = THEME;

export default StyleSheet.create({
  image: {
    borderRadius: '50%',
    width: REGULAR,
    height: REGULAR,
  },

  small: {
    width: SMALL,
    height: SMALL,
  },

  large: {
    width: LARGE,
    height: LARGE,
  },
});
