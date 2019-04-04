import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { COLOR, SPACE, UNIT } = THEME;
const BOX_SIZE = UNIT * 4;

export { BOX_SIZE };

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    height: BOX_SIZE,
    justifyContent: 'center',
    minWidth: BOX_SIZE,
  },

  boxExpand: {
    flex: 1,
  },

  boxSelected: {
    backgroundColor: COLOR.PRIMARY,
  },

  boxSelectedToday: {
    borderColor: COLOR.TEXT,
    borderWidth: 1,
  },

  caption: {
    position: 'absolute',
    top: (BOX_SIZE / 2) + (UNIT / 1.35),
    lineHeight: UNIT,
    fontSize: UNIT,
    opacity: 0.5,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginTop: SPACE.XXS,
  },

  text: {
    position: 'absolute',
  },

  textDisabled: {
    color: COLOR.LIGHT_GREY,
  },

  textHighlight: {
    color: COLOR.WHITE,
  },

  viel: {
    backgroundColor: COLOR.PRIMARY,
    height: UNIT * 4,
    width: UNIT * 4,
    opacity: 0.2,
    position: 'absolute',
  },

  vielDisabled: {
    backgroundColor: COLOR.LIGHT_GREY,
    opacity: 0.1,
  },
});
