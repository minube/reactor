import { Dimensions } from 'react-native';

import THEME from './theme';

const { BUTTON, FONT, UNIT } = THEME;

export default () => {
  const { width } = Dimensions.get('window');
  const tiny = width < 360;
  const phone = width >= 360 && width < 376;
  const tablet = width >= 376 && width < 510;
  const small = width >= 510 && width < 720;
  const regular = width >= 720 && width < 1024;
  const large = width >= 1024;

  return ({
    SCREEN: {
      tiny, phone, tablet, small, regular, large,
    },

    // -- components
    BUTTON: {
      CONTAINER: {
        height: regular || large ? BUTTON.HEIGHT : BUTTON.SMALL_HEIGHT,
        paddingHorizontal: regular || large ? UNIT * 3 : BUTTON.SMALL_HEIGHT / 2,
      },
      TEXT: regular || large ? FONT.SIZE.SMALL : FONT.SIZE.TINY,
    },

    CARD: {
      PICTURE_HEIGHT: regular || large ? UNIT * 19 : UNIT * 13.9,
      WIDTH: (() => {
        if (tiny) return UNIT * 13;
        if (phone || small) return UNIT * 15;
        if (tablet || regular) return UNIT * 16.8;

        return UNIT * 23.6;
      })(),
    },

    HEADING: {
      TITLE_FONT_SIZE: (() => {
        if (tiny || phone || tablet) return UNIT * 2.4;
        if (small || regular) return UNIT * 3;
        return UNIT * 4.8;
      })(),
    },
  });
};
