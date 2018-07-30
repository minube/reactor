import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { BORDER_RADIUS, COLOR } = THEME;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },

  mask: {
    backgroundColor: COLOR.WHITE,
    zIndex: 0,
  },
});
