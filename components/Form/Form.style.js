import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },

  fieldset: {
    paddingTop: UNIT,
    paddingHorizontal: UNIT,
    borderColor: COLOR.BORDER,
    borderRadius: UNIT / 4,
    borderWidth: 1,
    marginBottom: OFFSET,
  },

  row: {
    ...LAYOUT.STYLE.ROW,
    flexDirection: 'column',
  },

  inline2: {
    width: '49%',
  },

  inline3: {
    width: '32%',
  },

  inline4: {
    width: '24%',
  },

  inline5: {
    width: '19%',
  },

  anchor: {
    minWidth: '100%',
  },

  title: {
    marginBottom: UNIT,
  },
});
