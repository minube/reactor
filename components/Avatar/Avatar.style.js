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
    width: AVATAR.MEDIUM,
    height: AVATAR.MEDIUM,
  },
  large: {
    width: AVATAR.BIG,
    height: AVATAR.BIG,
  },

});
