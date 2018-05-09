import { Dimensions, Platform } from 'react-native';

import THEME from './theme';

const { BUTTON, FONT, UNIT } = THEME;
const screenSizes = width => ({
  TINY: width < 360,
  PHONE: width >= 360 && width < 376,
  TABLET: width >= 376 && width < 510,
  SMALL: width >= 510 && width < 720,
  REGULAR: width >= 720 && width < 1024,
  LARGE: width >= 1024,
});

const calc = ({ width }) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenSizes(width);

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
      TINY: (() => {
        const fontSize = REGULAR || LARGE ? FONT.SIZE.TINY : UNIT * 1.1;

        return { fontSize, lineHeight: fontSize * 1.15 };
      })(),

      SMALL: (() => {
        const fontSize = REGULAR || LARGE ? FONT.SIZE.SMALL : FONT.SIZE.TINY;

        return { fontSize, lineHeight: fontSize * 1.2 };
      })(),

      REGULAR: (() => {
        const fontSize = REGULAR || LARGE ? FONT.SIZE.REGULAR : FONT.SIZE.SMALL;

        return { fontSize, lineHeight: fontSize * 1.3 };
      })(),

      LARGE: (() => {
        let fontSize = FONT.SIZE.LARGE;
        if (TINY) fontSize = FONT.SIZE.SMALL;
        if (PHONE || SMALL) fontSize = FONT.SIZE.REGULAR;
        if (TABLET || REGULAR) fontSize = UNIT * 1.8;
        if (LARGE) fontSize = UNIT * 2;

        return { fontSize, lineHeight: fontSize * 1.3 };
      })(),

      LARGE_SHORT: (() => {
        let fontSize = 36;
        if (TINY) fontSize = UNIT * 1.8;
        if (PHONE || SMALL) fontSize = FONT.SIZE.LARGE;
        if (TABLET || REGULAR) fontSize = UNIT * 2.6;

        return { fontSize, lineHeight: fontSize * 1.3 };
      })(),

      TITLE: (() => {
        let fontSize = UNIT * 4.8;
        if (TINY || PHONE || TABLET) fontSize = UNIT * 2.4;
        if (SMALL || REGULAR) fontSize = UNIT * 3;

        return { fontSize, lineHeight: fontSize * 1.3 };
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

      ...screenSizes(this._width),
    };
  }

  calc({ height, width } = Dimensions.get('window')) {
    this._height = height;
    this._width = width;
    this._style = calc({ height, width });
  }
}

export default new Layout();
