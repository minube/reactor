import Color from 'color';

const PRIMARY = '#10c0bc';
const ACCENT = '#F69A37';
const UNIT = 10;

export default {
  BORDER_RADIUS: UNIT / 5,

  COLOR: {
    // -- Theme
    ACCENT,
    ACCENT_DARKEN: Color(ACCENT).darken(0.35),
    PRIMARY,
    PRIMARY_DARKEN: Color(PRIMARY).darken(0.35),
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
    SIZE: {
      TINY: UNIT * 1.1,
      SMALL: UNIT * 1.2,
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
    CARD_IMAGE_HEIGHT: UNIT * 19,
    CARD_MAX_WIDTH: UNIT * 23.6,
    CHIP_HEIGHT: UNIT * 3.2,
    CONTENT_MAX_WIDTH: UNIT * 128.0,
    DIALOG_MIN_WIDTH: '45%',
    HEADER_HEIGHT: UNIT * 6.4,
    INPUT_HEIGHT: UNIT * 4.4,
    PICKER_MAX_HEIGHT: UNIT * 51.2,
  },
};
