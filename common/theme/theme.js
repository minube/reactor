import { Platform } from 'react-native';

const UNIT = 10;

const FAMILY = Platform.OS === 'web' ? '"Open Sans", sans-serif' : undefined;
const FAMILY_SECONDARY = Platform.OS === 'web' ? 'Montserrat, sans-serif' : undefined;
const WEIGHT = {
  REGULAR: '400',
  SEMIBOLD: '600',
  BOLD: '700',
};

export default {
  BORDER_RADIUS: UNIT * 0.3,

  COLOR: {
    // Theme
    BACKGROUND: '#F5F5F6',
    BASE: '#cdd2d4',
    PRIMARY: '#10c0bc',
    SECONDARY: '#a66ecc',

    // -- Text
    TEXT: '#4a4a4a',
    TEXT_LIGHTEN: '#707070',
    // -- Notifications
    ALERT: '#FBB049',
    ERROR: '#d33c44',
    SUCCESS: '#84BD4B',
    WARNING: '#FDCD48',
    // -- Helpers
    DISABLED: '#f4f4f4',
    TRANSPARENT: 'transparent',
    BLACK: '#000000',
    WHITE: '#ffffff',
  },

  FONT: {
    FAMILY,
    FAMILY_SECONDARY,
    DEFAULT: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.REGULAR,
    },
    HEADLINE: {
      fontFamily: FAMILY_SECONDARY,
      fontWeight: WEIGHT.BOLD,
    },
    SUBTITLE: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.SEMIBOLD,
    },
    CAPTION: {},
    BUTTON: {
      fontFamily: FAMILY_SECONDARY,
      fontWeight: WEIGHT.SEMIBOLD,
    },
    INPUT: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.REGULAR,
    },
    WEIGHT,
  },

  MOTION: {
    DURATION: 225,
    EASE: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    EASE_IOS: '',
    EASE_ANDROID: '',
  },

  OFFSET: UNIT * 1.6,

  UNIT,
};
