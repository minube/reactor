import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT, UNIT } = THEME;

const HEADLINE = {
  fontFamily: FONT.FAMILY_SECONDARY,
  fontWeight: FONT.WEIGHT.BOLD,
};

const SUBTITLE = {
  fontWeight: FONT.WEIGHT.SEMIBOLD,
};

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    fontFamily: FONT.FAMILY,
    fontWeight: FONT.WEIGHT.REGULAR,
    textAlignVertical: 'center',
  },

  headline0: {
    ...HEADLINE, fontSize: UNIT * 12, lineHeight: UNIT * 12, letterSpacing: UNIT * -0.75,
  },
  headline1: {
    ...HEADLINE, fontSize: UNIT * 9.4, lineHeight: UNIT * 9.4, letterSpacing: UNIT * -0.58,
  },
  headline2: {
    ...HEADLINE, fontSize: UNIT * 6.0, lineHeight: UNIT * 6.0, letterSpacing: UNIT * -0.37,
  },
  headline3: {
    ...HEADLINE, fontSize: UNIT * 4.8, lineHeight: UNIT * 4.8, letterSpacing: UNIT * -0.3,
  },
  headline4: {
    ...HEADLINE, fontSize: UNIT * 3.2, lineHeight: UNIT * 3.4, letterSpacing: UNIT * -0.2,
  },
  headline5: {
    ...HEADLINE, fontSize: UNIT * 2.4, lineHeight: UNIT * 2.6, letterSpacing: UNIT * -0.15,
  },
  headline6: {
    ...HEADLINE, fontSize: UNIT * 2.0, lineHeight: UNIT * 2.2, letterSpacing: UNIT * -0.12,
  },

  subtitle1: { ...SUBTITLE, fontSize: UNIT * 2.0, lineHeight: UNIT * 2.2 },
  subtitle2: { ...SUBTITLE, fontSize: UNIT * 1.6, lineHeight: UNIT * 1.8 },
  subtitle3: { ...SUBTITLE, fontSize: UNIT * 1.4, lineHeight: UNIT * 1.6 },

  body1: { fontSize: UNIT * 1.6, lineHeight: UNIT * 3.0 },
  body2: { fontSize: UNIT * 1.4, lineHeight: UNIT * 2.4 },
  body3: { fontSize: UNIT * 1.2, lineHeight: UNIT * 1.7 },

  caption: { fontSize: UNIT * 1.2, lineHeight: UNIT * 1.6 },

  lighter: { fontWeight: FONT.WEIGHT.LIGHTER },

  semibold: { fontWeight: FONT.WEIGHT.SEMIBOLD },

  bold: { fontWeight: FONT.WEIGHT.BOLD },

  lighten: { color: COLOR.TEXT_LIGHTEN },
});
