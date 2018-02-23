import { Platform } from 'react-native';

const UNIT = 10;

export default {
  AVATAR: {
    SMALL: UNIT * 2,
  },

  BORDER_RADIUS: UNIT * 0.3,

  BUTTON: {
    FLOATING_HEIGHT: UNIT * 6,
    HEIGHT: UNIT * 4.5,
    SMALL_HEIGHT: UNIT * 3,
  },

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
      : undefined, // '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
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

  INPUT: {
    HEIGHT: UNIT * 4.4,
  },

  OFFSET: UNIT * 1.6,
  UNIT,
};
