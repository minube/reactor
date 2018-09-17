import STYLE from './style';
import screenType from './screenType';

export default (width = 360) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenType(width);
  const DEFAULT = REGULAR || LARGE;

  return {
    CARD: {
      HEIGHT: DEFAULT ? STYLE.cardHeightRegular : STYLE.cardHeightSmall,
      PORTRAIT: (() => {
        if (TINY) return STYLE.cardHeightPortraitTiny;
        if (PHONE || SMALL) return STYLE.cardHeightPortraitSmall;
        if (TABLET || REGULAR) return STYLE.cardHeightPortraitRegular;

        return STYLE.cardHeightPortraitDefault;
      })(),

      WIDTH: (() => {
        if (TINY) return STYLE.cardWidthTiny;
        if (PHONE || SMALL) return STYLE.cardWidthSmall;
        if (TABLET || REGULAR) return STYLE.cardWidthRegular;

        return STYLE.cardWidthDefault;
      })(),
    },

    TEXT: {
      TINY: (() => (DEFAULT ? STYLE.textTiny : STYLE.textGnome))(),
      SMALL: (() => (DEFAULT ? STYLE.textSmall : STYLE.textTiny))(),
      REGULAR: (() => (DEFAULT ? STYLE.textRegular : STYLE.textSmall))(),
      LARGE: (() => (DEFAULT ? STYLE.textLarge : STYLE.textRegular))(),
      SUBTITLE: (() => {
        if (TINY || PHONE || TABLET) return STYLE.textRegular;
        if (SMALL || REGULAR) return STYLE.textLarge;
        return STYLE.textSubtitle;
      })(),
      TITLE: (() => {
        if (TINY || PHONE || TABLET) return STYLE.textLarge;
        if (SMALL || REGULAR) return STYLE.textSubtitle;
        return STYLE.textTitle;
      })(),
    },
  };
};
