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
      TEXT: REGULAR || LARGE ? FONT.SIZE.SMALL : FONT.SIZE.TINY,
    },

    CARD: {
      PICTURE_HEIGHT: REGULAR || LARGE ? UNIT * 19 : UNIT * 13.9,
      WIDTH: (() => {
        if (TINY) return UNIT * 13;
        if (PHONE || SMALL) return UNIT * 15;
        if (TABLET || REGULAR) return UNIT * 16.8;

        return UNIT * 23.6;
      })(),
    },

    HEADING: {
      TITLE_FONT_SIZE: (() => {
        if (TINY || PHONE || TABLET) return UNIT * 2.4;
        if (SMALL || REGULAR) return UNIT * 3;
        return UNIT * 4.8;
      })(),
    },
  });
};
