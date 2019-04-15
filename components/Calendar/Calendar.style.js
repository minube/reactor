import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  activity: {
    alignSelf: 'center',
    position: 'absolute',
  },

  busy: {
    opacity: 0.1,
  },

  container: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: SPACE.MEDIUM,
    paddingVertical: SPACE.XS,
    justifyContent: 'center',
  },

  days: {
    paddingHorizontal: SPACE.MEDIUM,
  },
});
