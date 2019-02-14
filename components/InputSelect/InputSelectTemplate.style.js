import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';

const { UNIT } = THEME;
const TEMPLATE_HEIGHT = UNIT * 5.6;

export { TEMPLATE_HEIGHT };

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    paddingLeft: UNIT,
    paddingRight: UNIT * 4.4,
    height: INPUT_HEIGHT,
  },

  withCaption: {
    height: TEMPLATE_HEIGHT,
  },

  texts: {
    marginLeft: UNIT,
  },

  title: {
    lineHeight: UNIT * 2,
  },
});
