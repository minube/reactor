import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../common';

const { COLOR, UNIT, SPACE } = THEME;

const HEADER_HEIGHT = UNIT * 5.6;

export { HEADER_HEIGHT };

export default StyleSheet.create({
  children: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: SPACE.MEDIUM,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    backgroundColor: COLOR.WHITE,
    borderBottomColor: COLOR.BASE,
    borderBottomWidth: 1,
    height: HEADER_HEIGHT,
    paddingHorizontal: SPACE.XXS,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },

  title: {
    marginLeft: SPACE.MEDIUM,
  },
});
