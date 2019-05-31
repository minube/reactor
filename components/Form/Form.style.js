import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, SPACE } = THEME;

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
    paddingTop: SPACE.REGULAR,
    paddingHorizontal: SPACE.REGULAR,
    borderColor: COLOR.BASE,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    marginBottom: SPACE.REGULAR,
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
    width: '100%',
  },

  title: {
    marginBottom: SPACE.XS,
  },
});
