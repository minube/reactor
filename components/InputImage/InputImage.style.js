import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  AVATAR: { LARGE }, BORDER_RADIUS, COLOR, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    ...STYLE.ROW,
    alignItems: 'flex-start',
  },

  input: {
    flex: 1,
  },

  inputMargin: {
    marginLeft: UNIT,
  },

  image: {
    width: LARGE,
    height: LARGE,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.CONTENT,
  },
});
