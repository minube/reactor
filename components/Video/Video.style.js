import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR } = THEME;

export default StyleSheet.create({
  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      alignSelf: 'center',
      overflow: 'hidden',
    },
  ]),

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
    backgroundColor: COLOR.CONTENT,
  },
});
