import { THEME } from '../../common';
import { LOCALE } from '../Calendar/modules';

const {
  COLOR, ELEVATION, SPACE, UNIT,
} = THEME;

const STYLE_BAR = {
  width: UNIT,
  borderTopRightRadius: UNIT / 2,
  borderTopLeftRadius: UNIT / 2,
};

const STYLE_CONTAINER = {
  ...ELEVATION.SMALL,
  backgroundColor: COLOR.WHITE,
  height: UNIT * 32,
  width: UNIT * 64,
  padding: SPACE.REGULAR,
};

const CAPTIONS = [
  ...LOCALE.MONTHS,
];

const HIGHLIGHT = 7;

const SCALES = ['$24', '$10', '$5', ''];

const VALUES = [
  0, 0, 2, 8, 0, 0, 16, 8, 32, 24, 8, 10,
];

const LINE = {
  caption: 'Avg. 16', height: '50%', _color: 'red',
};

export default {
  CAPTIONS,
  COLOR: COLOR.ERROR,
  HIGHLIGHT,
  LINE,
  SCALES,
  STYLE_BAR,
  STYLE_CONTAINER,
  VALUES,
};
