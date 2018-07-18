import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, UNIT,
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
    width: UNIT * 5.4,
    height: UNIT * 5.4,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.CONTENT,
  },
});
