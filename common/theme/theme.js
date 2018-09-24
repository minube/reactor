import { Platform } from 'react-native';

const UNIT = 10;

export default {
  BORDER_RADIUS: UNIT * 0.3,

  COLOR: {
    // Theme
    BACKGROUND: '#F5F5F6',
    BASE: '#e0e0e0',
    PRIMARY: '#bdbdbd',
    SECONDARY: '#424242',
    // -- Text
    TEXT: '#4a4a4a',
    TEXT_LIGHTEN: '#9b9b9b',
    // -- Notifications
    ALERT: '#FBB049',
    ERROR: '#ef5160',
    SUCCESS: '#84BD4B',
    WARNING: '#FDCD48',
    // -- Helpers
    TRANSPARENT: 'transparent',
    BLACK: '#000000',
    WHITE: '#ffffff',
  },

  FONT: {
    FAMILY: Platform.OS === 'web' ? '"Open Sans", sans-serif' : undefined, // '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    FAMILY_SECONDARY: Platform.OS === 'web' ? 'Montserrat, sans-serif' : undefined,
    WEIGHT: {
      LIGHTER: '300',
      REGULAR: '400',
      SEMIBOLD: '600',
      BOLD: '700',
    },
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
