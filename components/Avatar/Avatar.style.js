import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR, AVATAR,
} = THEME;

export default StyleSheet.create({
  activity: {
    position: 'absolute',
  },

  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      backgroundColor: COLOR.BACKGROUND,
    },
  ]),

  small: {
    width: AVATAR.SMALL,
    height: AVATAR.SMALL,
    borderRadius: '50%',
  },
  medium: {
    width: AVATAR.MEDIUM,
    height: AVATAR.MEDIUM,
    borderRadius: '50%',
  },
  big: {
    width: AVATAR.BIG,
    height: AVATAR.BIG,
    borderRadius: '50%',
  },

});
