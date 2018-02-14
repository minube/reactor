import { Dimensions, Platform } from 'react-native';

const BREAKPOINTS = {
  SMALL: 600,
  REGULAR: 1024,
  LARGE: 1780,
};
const WINDOW_WIDTH = Dimensions.get('window').width;

const SCREEN = {
  TINY: WINDOW_WIDTH <= BREAKPOINTS.SMALL,
  SMALL: WINDOW_WIDTH > BREAKPOINTS.SMALL && WINDOW_WIDTH < BREAKPOINTS.REGULAR,
  REGULAR: WINDOW_WIDTH >= BREAKPOINTS.REGULAR && WINDOW_WIDTH <= BREAKPOINTS.LARGE,
  LARGE: WINDOW_WIDTH > BREAKPOINTS.LARGE,
};

const UNIT = 10;

export default {
  BORDER_RADIUS: UNIT / 5,

  BREAKPOINTS,

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

      TITLE: UNIT * 4.8,
      SUBTITLE: UNIT * 3.2,
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
    BUTTON_HEIGHT: SCREEN.REGULAR || SCREEN.LARGE ? UNIT * 4.5 : UNIT * 3,

    CARD_WIDTH: SCREEN.REGULAR || SCREEN.LARGE ? UNIT * 23.6 : UNIT * 16.8,
    CARD_PICTURE_HEIGHT: SCREEN.REGULAR || SCREEN.LARGE ? UNIT * 19 : UNIT * 13.9,

    // CARD_IMAGE_HEIGHT: UNIT * 19,
    // CARD_MAX_WIDTH: UNIT * 23.6,
    DIALOG_MIN_WIDTH: '45%',
    INPUT_HEIGHT: UNIT * 4.4,
    PICKER_MAX_HEIGHT: UNIT * 51.2,
  },

  SCREEN,

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
      shadowColor: '#000000',
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.26,
      shadowRadius: 5,
      ...Platform.select({
        android: { elevation: 4 },
      }),
    },
  },
};
