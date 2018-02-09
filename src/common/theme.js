import Color from 'color';
import { Platform } from 'react-native';

const ACCENT = '#F69A37';
const BLACK = '#000000';
const PRIMARY = '#10c0bc';
const WHITE = '#ffffff';
const UNIT = 10;

export default {
  BORDER_RADIUS: UNIT / 5,

  COLOR: {
    // -- Theme
    ACCENT,
    ACCENT_DARKEN: Color(ACCENT).darken(0.35),
    PRIMARY,
    PRIMARY_DARKEN: Color(PRIMARY).darken(0.35),
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
    BLACK,
    WHITE,
    // -- Social
    BOOKING: '#498cdf',
    FACEBOOK: '#4c66a4',
    GOOGLE: '#d34836',
    TWITTER: '#54abee',
  },

  FONT: {
    FAMILY: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
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

  STYLE: {
    CENTERED: {
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },

    ROW: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    SHADOW: {
      shadowColor: BLACK,
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.26,
      shadowRadius: 5,
      ...Platform.select({
        android: { elevation: 4 },
      }),
    },
  },
};
