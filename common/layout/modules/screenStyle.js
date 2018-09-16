import THEME from '../../theme';
import screenType from './screenType';

const { STYLE } = THEME;

export default (width = 360) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenType(width);

  return {
    BUTTON: {
      CONTAINER: (() => (REGULAR || LARGE ? STYLE.BUTTON_REGULAR : STYLE.BUTTON_SMALL))(),
    },

    CARD: {
      HEIGHT: REGULAR || LARGE ? STYLE.CARD_HEIGHT_REGULAR : STYLE.CARD_HEIGHT_SMALL,
      PORTRAIT: (() => {
        if (TINY) return STYLE.CARD_HEIGHT_PORTRAIT_TINY;
        if (PHONE || SMALL) return STYLE.CARD_HEIGHT_PORTRAIT_SMALL;
        if (TABLET || REGULAR) return STYLE.CARD_HEIGHT_PORTRAIT_REGULAR;

        return STYLE.CARD_HEIGHT_PORTRAIT_DEFAULT;
      })(),

      WIDTH: (() => {
        if (TINY) return STYLE.CARD_WIDTH_TINY;
        if (PHONE || SMALL) return STYLE.CARD_WIDTH_SMALL;
        if (TABLET || REGULAR) return STYLE.CARD_WIDTH_REGULAR;

        return STYLE.CARD_WIDTH_DEFAULT;
      })(),
    },

    TEXT: {
      TINY: (() => (REGULAR || LARGE ? STYLE.TEXT_TINY : STYLE.TEXT_GNOME))(),
      SMALL: (() => (REGULAR || LARGE ? STYLE.TEXT_SMALL : STYLE.TEXT_TINY))(),
      REGULAR: (() => (REGULAR || LARGE ? STYLE.TEXT_REGULAR : STYLE.TEXT_SMALL))(),
      LARGE: (() => (REGULAR || LARGE ? STYLE.TEXT_LARGE : STYLE.TEXT_REGULAR))(),
      SUBTITLE: (() => {
        if (TINY || PHONE || TABLET) return STYLE.TEXT_REGULAR;
        if (SMALL || REGULAR) return STYLE.TEXT_LARGE;
        return STYLE.TEXT_SUBTITLE;
      })(),
      TITLE: (() => {
        if (TINY || PHONE || TABLET) return STYLE.TEXT_LARGE;
        if (SMALL || REGULAR) return STYLE.TEXT_SUBTITLE;
        return STYLE.TEXT_TITLE;
      })(),
    },
  };
};
