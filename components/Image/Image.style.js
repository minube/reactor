import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  COLOR,
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


});
