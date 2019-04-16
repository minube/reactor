import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  activity: {
    alignSelf: 'center',
    position: 'absolute',
  },

  busy: {
    opacity: 0.5,
  },

  container: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: SPACE.MEDIUM,
    paddingVertical: SPACE.XS,
    justifyContent: 'center',
  },

  content: {
    ...LAYOUT.STYLE.ROW,
  },

  days: {
    paddingHorizontal: SPACE.MEDIUM,
  },

  instance: {
    flex: 1,
  },
});
