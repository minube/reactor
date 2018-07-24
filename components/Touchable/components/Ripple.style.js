import { StyleSheet } from 'react-native';

import { THEME } from '../../../common';

const { UNIT } = THEME;

export default StyleSheet.create({
  ripple: {
    width: UNIT * 2,
    height: UNIT * 2,
    borderRadius: UNIT,
    overflow: 'hidden',
    position: 'absolute',
  },
});
