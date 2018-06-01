import { Dimensions, Platform } from 'react-native';

import THEME from './theme';
import screenSize from './screenSize';

const { STYLE } = THEME;

const calc = ({ width }) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenSize(width);

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

class Layout {
  constructor({ height, width } = Dimensions.get('window')) {
    if (!Layout.instance) {
      Layout.instance = this;
      this._height = height;
      this._width = width;
      this._style = calc({ height, width });
    }
    return Layout.instance;
  }

  get STYLE() {
    return this._style;
  }

  get VIEWPORT() {
    const H = this._height;
    const PORTRAIT = this._height > this._width;

    return {
      H,
      W: this._width,

      PORTRAIT,
      LANDSCAPE: this._width > this._height,
      IPHONEX: PORTRAIT && H === 812 && Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS,

      ...screenSize(this._width),
    };
  }

  calc({ height, width } = Dimensions.get('window')) {
    this._height = height;
    this._width = width;
    this._style = calc({ height, width });
  }
}

export default new Layout();
