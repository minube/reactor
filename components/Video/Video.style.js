import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.CENTERED,
    alignSelf: 'center',
    overflow: 'hidden',
  },

  loading: {
    backgroundColor: COLOR.BACKGROUND,
  },

  activity: {
    position: 'absolute',
    alignSelf: 'center',
  },

  webView: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: COLOR.BASE,
  },
});
