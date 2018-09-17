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
    FAMILY: Platform.OS === 'web'
      ? '"Open Sans" , "Montserrat", sans-serif'
      : undefined, // '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    SIZE: {
      GNOME: UNIT * 1.1,
      TINY: UNIT * 1.2,
      SMALL: UNIT * 1.4,
      REGULAR: UNIT * 1.6,
      LARGE: UNIT * 2,
      SUBTITLE: UNIT * 3,
      TITLE: UNIT * 4.8,
    },
    WEIGHT: {
      LIGHTER: '300',
      REGULAR: 'normal',
      SEMIBOLD: '600',
      BOLD: 'bold',
    },
  },

  OFFSET: UNIT * 1.6,

  UNIT,
};
