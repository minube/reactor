import screen from './screen';
import THEME from './theme';

const { BUTTON, FONT, UNIT } = THEME;

export default () => {
  const SCREEN = screen();
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = SCREEN;

  return ({
    SCREEN,

    // -- components
    BUTTON: {
      CONTAINER: {
        height: REGULAR || LARGE ? BUTTON.HEIGHT : BUTTON.SMALL_HEIGHT,
        paddingHorizontal: REGULAR || LARGE ? UNIT * 3 : BUTTON.SMALL_HEIGHT / 2,
      },
    },

    CARD: {
      HEIGHT: REGULAR || LARGE ? UNIT * 19 : UNIT * 13.9,
      PORTRAIT: (() => {
        if (TINY) return UNIT * 17;
        if (PHONE || SMALL) return UNIT * 19.6;
        if (TABLET || REGULAR) return UNIT * 22;

        return UNIT * 25;
      })(),
      WIDTH: (() => {
        if (TINY) return UNIT * 13;
        if (PHONE || SMALL) return UNIT * 15;
        if (TABLET || REGULAR) return UNIT * 16.8;

        return UNIT * 23.6;
      })(),
    },

    TEXT: {
      TINY: (() => {
        const fontSize = REGULAR || LARGE ? FONT.SIZE.TINY : UNIT * 1.1;

        return {
          fontSize,
          lineHeight: fontSize * 1.1,
        };
      })(),

      SMALL: (() => {
        const fontSize = REGULAR || LARGE ? FONT.SIZE.SMALL : FONT.SIZE.TINY;

        return {
          fontSize,
          lineHeight: fontSize * 1.06,
        };
      })(),

      REGULAR: THEME.REGULAR,

      LARGE: (() => {
        let fontSize = FONT.SIZE.LARGE;
        if (TINY) fontSize = FONT.SIZE.SMALL;
        if (PHONE || SMALL) fontSize = FONT.SIZE.REGULAR;
        if (TABLET || REGULAR) fontSize = UNIT * 1.8;

        return {
          fontSize,
          lineHeight: fontSize * 1.06,
        };
      })(),

      TITLE: (() => {
        let fontSize = UNIT * 4.8;
        if (TINY || PHONE || TABLET) fontSize = UNIT * 2.4;
        if (SMALL || REGULAR) fontSize = UNIT * 3;

        return {
          fontSize,
          lineHeight: fontSize * 1.3,
        };
      })(),
    },
  });
};
