import { StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  minimize: {
    transform: [{ scale: 0.8 }],
  },
});
