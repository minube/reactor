import { Platform, StyleSheet } from 'react-native';

import { ENV } from '../../common';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    ...Platform.select({
      web: {
        height: !ENV.IS_TEST && !ENV.IS_SERVER ? window.innerHeight : undefined,
        width: '100vw',
      },
    }),
  },
});
