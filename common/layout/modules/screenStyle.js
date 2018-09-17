import STYLE from '../../style';
import screenType from './screenType';

const {
  cardHeightSmall, cardHeightRegular,
  cardHeightPortraitTiny, cardHeightPortraitSmall, cardHeightPortraitRegular, cardHeightPortraitDefault,
  cardWidthTiny, cardWidthSmall, cardWidthRegular, cardWidthDefault,
  textGnome, textTiny, textSmall, textRegular, textLarge, textSubtitle, textTitle,
} = STYLE;

export default (width = 360) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenType(width);
  const DEFAULT = REGULAR || LARGE;

  return {
    CARD: {
      HEIGHT: DEFAULT ? cardHeightRegular : cardHeightSmall,
      PORTRAIT: (() => {
        if (TINY) return cardHeightPortraitTiny;
        if (PHONE || SMALL) return cardHeightPortraitSmall;
        if (TABLET || REGULAR) return cardHeightPortraitRegular;

        return cardHeightPortraitDefault;
      })(),

      WIDTH: (() => {
        if (TINY) return cardWidthTiny;
        if (PHONE || SMALL) return cardWidthSmall;
        if (TABLET || REGULAR) return cardWidthRegular;

        return cardWidthDefault;
      })(),
    },

    TEXT: {
      TINY: (() => (DEFAULT ? textTiny : textGnome))(),
      SMALL: (() => (DEFAULT ? textSmall : textTiny))(),
      REGULAR: (() => (DEFAULT ? textRegular : textSmall))(),
      LARGE: (() => (DEFAULT ? textLarge : textRegular))(),
      SUBTITLE: (() => {
        if (TINY || PHONE || TABLET) return textRegular;
        if (SMALL || REGULAR) return textLarge;
        return textSubtitle;
      })(),
      TITLE: (() => {
        if (TINY || PHONE || TABLET) return textLarge;
        if (SMALL || REGULAR) return textSubtitle;
        return textTitle;
      })(),
    },
  };
};
