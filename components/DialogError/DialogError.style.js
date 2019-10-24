import { StyleSheet } from 'react-native';
import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, SPACE, UNIT,
} = THEME;

export default StyleSheet.create({
  arrow: {
    borderLeftColor: COLOR.TRANSPARENT,
    borderLeftWidth: SPACE.XS,
    borderTopColor: COLOR.LIGHT_ERROR,
    borderTopWidth: SPACE.XS,
    borderRightColor: COLOR.TRANSPARENT,
    borderRightWidth: SPACE.XS,
    left: UNIT * 2,
    position: 'absolute',
    top: UNIT * 4.4,
  },

  container: {
    marginBottom: SPACE.S,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: SPACE.S,
    paddingVertical: SPACE.REGULAR / 2,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.LIGHT_ERROR,
    minWidth: UNIT * 6,
    minHeight: UNIT * 4.4,
    width: '100%',
  },

  icon: {
    marginLeft: SPACE.S,
  },

  text: {
    color: COLOR.ERROR,
  },
});
