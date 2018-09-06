import { Platform } from 'react-native';

const UNIT = 10;

export default {
  AVATAR: {
    SMALL: UNIT * 2,
    REGULAR: UNIT * 4,
    LARGE: UNIT * 6,
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
    ACCENT: '#f69a37',
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

  INPUT: {
    HEIGHT: UNIT * 4.4,
  },

  OFFSET: UNIT * 1.6,

  UNIT,
};
