import { StyleSheet } from 'react-native';

import { STYLE } from '../../common';

export default StyleSheet.create({
  container: STYLE.ROW,

  minimize: {
    transform: [{ scale: 0.8 }],
  },
});
