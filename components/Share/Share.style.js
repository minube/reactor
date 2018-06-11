import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  dialog: {
    minWidth: 'auto',
    width: UNIT * 36,
  },

  options: {
    borderTopColor: COLOR.BACKGROUND,
    borderTopWidth: 1,
    marginVertical: OFFSET,
  },

  option: {
    ...STYLE.ROW,
    paddingVertical: OFFSET,
    borderBottomColor: COLOR.BACKGROUND,
    borderBottomWidth: 1,
  },

  icon: {
    backgroundColor: COLOR.CONTENT,
    width: UNIT * 2,
    height: UNIT * 2,
    marginRight: UNIT,
  },
});
