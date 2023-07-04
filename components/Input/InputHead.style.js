import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    marginTop: SPACE.XS,
    marginBottom: SPACE.L,
    paddingLeft: 0,
    alignItems: 'flex-start',
    minWidth: '100%',
    float: 'left'
  },

  text:{
    flex: 1
  },

  iconLeft:{

  }
});
