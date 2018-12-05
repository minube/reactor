import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT: { HEADLINE, SUBTITLE, DEFAULT, CAPTION }, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...DEFAULT,
    color: COLOR.TEXT,
    textAlignVertical: 'center',
  },

  headline0: {
    fontSize: UNIT * 12, lineHeight: UNIT * 12, letterSpacing: UNIT * -0.5, ...HEADLINE,
  },
  headline1: {
    fontSize: UNIT * 9.4, lineHeight: UNIT * 9.4, letterSpacing: UNIT * -0.392, ...HEADLINE,
  },
  headline2: {
    fontSize: UNIT * 6.0, lineHeight: UNIT * 6.0, letterSpacing: UNIT * -0.25, ...HEADLINE,
  },
  headline3: {
    fontSize: UNIT * 4.8, lineHeight: UNIT * 4.8, letterSpacing: UNIT * -0.2, ...HEADLINE,
  },
  headline4: {
    fontSize: UNIT * 3.2, lineHeight: UNIT * 3.4, letterSpacing: UNIT * -0.133, ...HEADLINE,
  },
  headline5: {
    fontSize: UNIT * 2.4, lineHeight: UNIT * 2.6, letterSpacing: UNIT * -0.1, ...HEADLINE,
  },
  headline6: {
    fontSize: UNIT * 2.0,
    lineHeight: UNIT * 2.2,
    letterSpacing: parseFloat((UNIT * -0.083).toFixed(2), 10),
    ...HEADLINE,
  },

  subtitle1: { ...SUBTITLE, fontSize: UNIT * 2.0, lineHeight: UNIT * 2.2 },
  subtitle2: { ...SUBTITLE, fontSize: UNIT * 1.6, lineHeight: UNIT * 1.8 },
  subtitle3: { ...SUBTITLE, fontSize: UNIT * 1.4, lineHeight: UNIT * 1.6 },

  body1: { fontSize: UNIT * 1.6, lineHeight: UNIT * 3.0 },
  body2: { fontSize: UNIT * 1.4, lineHeight: UNIT * 2.4 },
  body3: { fontSize: UNIT * 1.2, lineHeight: UNIT * 1.7 },

  caption1: { ...CAPTION, fontSize: UNIT * 1.4, lineHeight: UNIT * 1.8 },
  caption2: { ...CAPTION, fontSize: UNIT * 1.2, lineHeight: UNIT * 1.6 },

  lighten: { color: COLOR.TEXT_LIGHTEN },
});
