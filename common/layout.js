import { Dimensions, Platform } from 'react-native';

import THEME from './theme';
import screenSize from './screenSize';

const { STYLE } = THEME;

const calc = (width) => {
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

    SHARE: {
      DIALOG: (() => (TINY || PHONE || SMALL ? STYLE.SHARE_MOBILE : {}))(),
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
  constructor() {
    if (!Layout.instance) {
      const { height = 720, width = 1280 } = Dimensions.get('window');
      Layout.instance = this;
      this.height = height;
      this.width = width;
      this.style = calc(width);
    }
    return Layout.instance;
  }

  get STYLE() {
    return this.style;
  }

  get VIEWPORT() {
    const H = this.height;
    const W = this.width;
    const PORTRAIT = H > W;

    return {
      H,
      W,

      PORTRAIT,
      LANDSCAPE: W > H,
      IPHONEX: PORTRAIT && H === 812 && Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS,

      ...screenSize(W),
    };
  }

  calc({ height = 720, width = 1280 } = Dimensions.get('window')) {
    this.height = height;
    this.width = width;
    this.style = calc(width);
  }
}

export default new Layout();
