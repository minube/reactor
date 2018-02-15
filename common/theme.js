import { Dimensions, Platform } from 'react-native';

const UNIT = 10;
const WIDTH = Dimensions.get('window').width;

const SCREEN = () => ({
  TINY: WIDTH < 360,
  PHONE: WIDTH >= 360 && WIDTH < 376,
  TABLET: WIDTH >= 376 && WIDTH < 510,
  SMALL: WIDTH >= 510 && WIDTH < 720,
  REGULAR: WIDTH >= 720 && WIDTH <= 1024,
  LARGE: WIDTH >= 1024,

  HEIGHT: Dimensions.get('window').height,
  WIDTH,
});

export default {
  BORDER_RADIUS: UNIT / 5,

  COLOR: {
    // -- Theme
    PRIMARY: '#10c0bc',
    PRIMARY_INACTIVE: '#10c0bc',
    PRIMARY_ACTIVE: '#0da6a3',

    ACCENT: '#f69a37',
    ACCENT_ACTIVE: '#e37e19',
    ACCENT_INACTIVE: '#ff9326',
    // -- Text
    TEXT: '#4a4a4a',
    TEXT_LIGHTEN: '#9b9b9b',
    // -- Backgrounds
    BACKGROUND: '#f4f4f4',
    BORDER: '#dbdbdb',
    CONTENT: '#CDD2D4',
    TRANSPARENT: 'transparent',
    // -- Notifications
    ALERT: '#FBB049',
    ERROR: '#ef5160',
    SUCCESS: '#84BD4B',
    WARNING: '#FDCD48',
    // -- Base
    BASE: '#cccccc',
    BLACK: '#000000',
    WHITE: '#ffffff',
    // -- Social
    BOOKING: '#498cdf',
    FACEBOOK: '#4c66a4',
    GOOGLE: '#d34836',
    TWITTER: '#54abee',
  },

  FONT: {
    FAMILY: Platform.OS === 'web'
      ? '"Montserrat", sans-serif'
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    SIZE: {
      TINY: UNIT * 1.2,
      SMALL: UNIT * 1.4,
      REGULAR: UNIT * 1.6,
      LARGE: UNIT * 2,
    },
    WEIGHT: {
      LIGHT: '300',
      REGULAR: 'normal',
      BOLD: 'bold',
    },
  },

  OFFSET: UNIT * 1.6,
  UNIT,

  LAYOUT: {
    AVATAR_SMALL: UNIT * 2,
    BORDER_RADIUS: UNIT * 0.3,
    BUTTON_HEIGHT: SCREEN().REGULAR || SCREEN().LARGE ? UNIT * 4.5 : UNIT * 3,

    CARD_PICTURE_HEIGHT: SCREEN().REGULAR || SCREEN().LARGE ? UNIT * 19 : UNIT * 13.9,
    CARD_WIDTH: (() => {
      const {
        TINY, PHONE, SMALL, TABLET, REGULAR,
      } = SCREEN();

      if (TINY) return UNIT * 13;
      if (PHONE || SMALL) return UNIT * 15;
      if (TABLET || REGULAR) return UNIT * 16.8;
      return UNIT * 23.6;
    })(),

    DIALOG_MIN_WIDTH: '45%',
    INPUT_HEIGHT: UNIT * 4.4,
    PICKER_MAX_HEIGHT: UNIT * 51.2,
  },

  SCREEN,
};
