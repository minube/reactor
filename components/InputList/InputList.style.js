import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: OFFSET,
    zIndex: 1,
  },

  content: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BORDER,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: UNIT / 4,
  },

  input: {
    marginBottom: 0,
  },

  error: {
    borderColor: COLOR.ERROR,
    borderTopWidth: 1,
  },

  disabled: {
    backgroundColor: COLOR.BACKGROUND,
  },

  values: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: UNIT,
  },

  value: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    minHeight: OFFSET * 2,
    backgroundColor: COLOR.CONTENT,
    borderRadius: OFFSET,
    margin: UNIT / 10,
    paddingHorizontal: UNIT,
    paddingVertical: UNIT / 2,
  },

  iconClose: {
    marginLeft: UNIT,
    width: UNIT,
    height: UNIT,
  },

  suggestions: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopWidth: 1,
    alignSelf: 'flex-start',
    top: UNIT * 5.4,
    width: '100%',
    zIndex: 1,
  },

  suggestion: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    paddingHorizontal: UNIT,
    paddingVertical: UNIT / 2,
  },
});
