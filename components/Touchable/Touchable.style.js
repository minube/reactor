import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { BORDER_RADIUS } = THEME;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
});
