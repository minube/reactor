import { StyleSheet } from 'react-native';
import { LAYOUT, THEME } from '../../common';

const {
  BORDER_RADIUS, COLOR, SPACE, UNIT,
} = THEME;
const ERROR_COLOR = 'rgba(239, 81, 96, 0.2)';

export default StyleSheet.create({
  arrow: {
    borderLeftColor: COLOR.TRANSPARENT,
    borderLeftWidth: SPACE.XS,
    borderTopColor: ERROR_COLOR,
    borderTopWidth: SPACE.XS,
    borderRightColor: COLOR.TRANSPARENT,
    borderRightWidth: SPACE.XS,
    left: UNIT * 2,
    position: 'absolute',
    top: UNIT * 4.4,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: SPACE.S,
    paddingVertical: SPACE.REGULAR / 2,
    borderRadius: BORDER_RADIUS,
    backgroundColor: ERROR_COLOR,
    minWidth: UNIT * 6,
    minHeight: UNIT * 4.4,
  },

  icon: {
    marginLeft: SPACE.S,
  },

  text: {
    color: COLOR.ERROR,
  },
});
