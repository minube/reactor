import { StyleSheet } from 'react-native';

import { THEMEv2 } from '../../common';

const { COLOR, FONT } = THEMEv2;

export default StyleSheet.create({
  accent: {
    color: COLOR.ACCENT,
  },

  lighter: {
    fontWeight: FONT.WEIGHT.LIGHTER,
  },

  semibold: {
    fontWeight: FONT.WEIGHT.SEMIBOLD,
  },

  bold: {
    fontWeight: FONT.WEIGHT.BOLD,
  },

  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
  },

  italic: {
    fontStyle: 'italic',
  },

  lighten: {
    color: COLOR.TEXT_LIGHTEN,
  },

  primary: {
    color: COLOR.PRIMARY,
  },

  tiny: {
    fontSize: FONT.SIZE.TINY,
  },
});
