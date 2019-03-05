import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, OFFSET } = THEME;

export default StyleSheet.create({
  activity: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
  },

  busy: {
    opacity: 0.1,
  },

  container: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: OFFSET,
    paddingVertical: OFFSET / 2,
    justifyContent: 'center',
    width: 400,
  },
});
