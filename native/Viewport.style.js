import { StyleSheet } from 'react-native';

import { THEME } from '../common';
import { HEADER_HEIGHT } from './Header.style';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLOR.WHITE,
  },

  content: {
    paddingBottom: SPACE.REGULAR,
    paddingTop: HEADER_HEIGHT + SPACE.REGULAR,
    paddingHorizontal: SPACE.REGULAR,
  },
});
