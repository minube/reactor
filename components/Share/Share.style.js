import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT, SPACE } = THEME;

export default StyleSheet.create({
  dialog: {
    minWidth: 'auto',
    width: UNIT * 36,
  },

  options: {
    borderTopColor: COLOR.BACKGROUND,
    borderTopWidth: 1,
    marginVertical: SPACE.MEDIUM,
  },

  option: {
    ...LAYOUT.STYLE.ROW,
    paddingVertical: SPACE.MEDIUM,
    borderBottomColor: COLOR.BACKGROUND,
    borderBottomWidth: 1,
  },

  icon: {
    marginRight: SPACE.XS,
  },
});
