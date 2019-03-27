import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT, SPACE } = THEME;
const TEMPLATE_HEIGHT = UNIT * 5.6;

export { TEMPLATE_HEIGHT };

export default StyleSheet.create({
  inputOption: {
    marginRight: SPACE.XS,
    marginBottom: 0,
  },

  title: {
    lineHeight: UNIT * 2,
  },
});
