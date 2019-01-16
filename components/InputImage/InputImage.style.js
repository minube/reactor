import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    alignItems: 'flex-start',
  },

  input: {
    flex: 1,
  },

  inputMargin: {
    marginLeft: UNIT,
  },

  image: {
    width: UNIT * 6.3,
    height: UNIT * 6.3,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.BASE,
  },
});
