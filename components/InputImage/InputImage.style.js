import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  input: {
    flex: 1,
  },

  inputMargin: {
    marginLeft: UNIT,
  },

  image: {
    width: UNIT * 4.4,
    height: UNIT * 4.4,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.BASE,
    marginBottom: UNIT * 0.1,
  },
});
