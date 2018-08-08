import { StyleSheet } from 'react-native';

import { STYLE, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: OFFSET,
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
    ...STYLE.ROW,
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
    alignSelf: 'flex-start',
    top: UNIT * 3.6,
    width: '100%',
    zIndex: 1,
  },

  suggestion: {
    ...STYLE.ROW,
    justifyContent: 'space-between',
    paddingHorizontal: UNIT,
    paddingVertical: UNIT / 2,
  },
});
