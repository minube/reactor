import { StyleSheet } from 'react-native';

import { STYLE } from '../../common';

export default StyleSheet.create({
  container: STYLE.ROW,

  containerSmall: {
    transform: [{ scale: 0.80 }],
  },

  symbol: {
    alignSelf: 'flex-end',
    transform: [{ scale: 0.75 }],
  },
});
