import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const {
  COLOR, FONT, UNIT, SPACE,
} = THEME;

const COLUMN_HEIGHT = UNIT * 6.4;
const COLUMN_WIDTH = UNIT * 1;
const SCALE_WIDTH = SPACE.XL;

export default StyleSheet.create({
  bar: {
    backgroundColor: COLOR.BASE,
    borderTopLeftRadius: COLUMN_WIDTH / 2,
    borderTopRightRadius: COLUMN_WIDTH / 2,
    maxHeight: '100%',
    minHeight: COLUMN_WIDTH,
    width: COLUMN_WIDTH,
  },

  barEmpty: {
    opacity: 0.8,
  },

  barInverted: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: COLUMN_WIDTH / 2,
    borderBottomRightRadius: COLUMN_WIDTH / 2,
  },

  captions: {
    height: SPACE.REGULAR,
  },

  column: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  columnInverted: {
    justifyContent: 'flex-start',
  },

  container: {
  },

  containerInverted: {
    marginTop: -1,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    alignItems: 'flex-end',
    flex: 1,
    height: COLUMN_HEIGHT,
  },


  legend: {
    fontSize: UNIT,
    height: UNIT,
    lineHeight: UNIT,
  },

  legendHighlight: {
    color: COLOR.WHITE,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  row: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
  },

  rowScale: {
    marginLeft: SCALE_WIDTH,
  },

  scales: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  scaleCaptions: {
    bottom: SPACE.REGULAR,
  },

  scaleLines: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },

  scaleLine: {
    height: 1,
    width: '100%',
    backgroundColor: COLOR.BASE,
  },

  scaleLineAVG: {
    opacity: 0.5,
  },

  scaleLineEmpty: {
    height: 0,
  },

  scaleValues: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: SPACE.XXS,
    justifyContent: 'space-between',
    zIndex: 1,
  },

  scaleValuesInverted: {
    flexDirection: 'column-reverse',
  },

  tag: {
    alignSelf: 'flex-start',
    borderRadius: SPACE.S,
    height: UNIT + (SPACE.XXS * 2),
    paddingVertical: SPACE.XXS,
    paddingHorizontal: SPACE.XS,
  },
});
