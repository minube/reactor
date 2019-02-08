import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT } = THEME;

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
    borderColor: COLOR.BASE,
    borderRadius: UNIT / 4,
    borderWidth: 1,
    marginBottom: UNIT * 2.4,
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
