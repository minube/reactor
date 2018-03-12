import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, AVATAR,
} = THEME;

export default StyleSheet.create({
  small: {
    width: AVATAR.SMALL,
    height: AVATAR.SMALL,
  },
  regular: {
    width: AVATAR.REGULAR,
    height: AVATAR.REGULAR,
  },
  large: {
    width: AVATAR.LARGE,
    height: AVATAR.LARGE,
  },

});
