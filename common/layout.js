import { Dimensions, Platform, StyleSheet } from 'react-native';

import THEME from './theme';
import screenSize from './screenSize';

const { BUTTON, FONT, UNIT } = THEME;

const TEXTS = StyleSheet.create({
  GNOME: { fontSize: FONT.SIZE.GNOME, lineHeight: FONT.SIZE.GNOME * 1.2 },
  TINY: { fontSize: FONT.SIZE.TINY, lineHeight: FONT.SIZE.TINY * 1.2 },
  SMALL: { fontSize: FONT.SIZE.SMALL, lineHeight: FONT.SIZE.SMALL * 1.2 },
  REGULAR: { fontSize: FONT.SIZE.REGULAR, lineHeight: FONT.SIZE.REGULAR * 1.3 },
  LARGE: { fontSize: FONT.SIZE.LARGE, lineHeight: FONT.SIZE.LARGE * 1.3 },
  SUBTITLE: { fontSize: FONT.SIZE.SUBTITLE, lineHeight: FONT.SIZE.SUBTITLE * 1.3 },
  TITLE: { fontSize: FONT.SIZE.TITLE, lineHeight: FONT.SIZE.TITLE * 1.3 },
});

const calc = ({ width }) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenSize(width);

  return {
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
      TINY: (() => (REGULAR || LARGE ? TEXTS.TINY : TEXTS.GNOME))(),
      SMALL: (() => (REGULAR || LARGE ? TEXTS.SMALL : TEXTS.TINY))(),
      REGULAR: (() => (REGULAR || LARGE ? TEXTS.REGULAR : TEXTS.SMALL))(),
      LARGE: (() => (REGULAR || LARGE ? TEXTS.LARGE : TEXTS.REGULAR))(),
      SUBTITLE: (() => {
        if (TINY || PHONE || TABLET) return TEXTS.REGULAR;
        if (SMALL || REGULAR) return TEXTS.LARGE;
        return TEXTS.SUBTITLE;
      })(),
      TITLE: (() => {
        if (TINY || PHONE || TABLET) return TEXTS.LARGE;
        if (SMALL || REGULAR) return TEXTS.SUBTITLE;
        return TEXTS.TITLE;
      })(),

      // @TODO
      // LARGE_SHORT: (() => {
      //   let fontSize = 36;
      //   if (TINY) fontSize = UNIT * 1.8;
      //   if (PHONE || SMALL) fontSize = FONT.SIZE.LARGE;
      //   if (TABLET || REGULAR) fontSize = UNIT * 2.6;

      //   return { fontSize, lineHeight: fontSize * 1.3 };
      // })(),
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
