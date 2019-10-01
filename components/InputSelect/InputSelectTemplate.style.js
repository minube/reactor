import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT, SPACE } = THEME;
const TEMPLATE_HEIGHT = UNIT * 4.4;

export { TEMPLATE_HEIGHT };

export default StyleSheet.create({
  texts: {
    marginLeft: SPACE.XS,
  },

  title: {
    lineHeight: UNIT * 2,
  },
});
