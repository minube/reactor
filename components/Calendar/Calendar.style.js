import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;

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
    borderBottomWidth: 4,
    borderColor: COLOR.PRIMARY,
    paddingHorizontal: SPACE.MEDIUM,
    paddingVertical: SPACE.XS,
    justifyContent: 'center',
  },

  days: {
    paddingHorizontal: SPACE.MEDIUM,
    paddingVertical: SPACE.S,
  },
});
