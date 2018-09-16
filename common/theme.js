import { Platform, StyleSheet } from 'react-native';

const UNIT = 10;

const BUTTON = {
  FLOATING_HEIGHT: UNIT * 6,
  HEIGHT: UNIT * 4.5,
  SMALL_HEIGHT: UNIT * 3,
};

const FONT = {
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
};

export default {
  AVATAR: {
    SMALL: UNIT * 2,
    REGULAR: UNIT * 4,
    LARGE: UNIT * 6,
  },

  BORDER_RADIUS: UNIT * 0.3,

  BUTTON,

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

  FONT,

  INPUT: {
    HEIGHT: UNIT * 4.4,
  },

  OFFSET: UNIT * 1.6,
  UNIT,

  STYLE: StyleSheet.create({
    BUTTON_REGULAR: { minWidth: BUTTON.HEIGHT, height: BUTTON.HEIGHT, paddingHorizontal: UNIT * 3 },
    BUTTON_SMALL:
      { minWidth: BUTTON.SMALL_HEIGHT, height: BUTTON.SMALL_HEIGHT, paddingHorizontal: BUTTON.SMALL_HEIGHT / 2 },

    CARD_HEIGHT_SMALL: { height: UNIT * 13.9 },
    CARD_HEIGHT_REGULAR: { height: UNIT * 19 },
    CARD_HEIGHT_PORTRAIT_TINY: { height: UNIT * 17 },
    CARD_HEIGHT_PORTRAIT_SMALL: { height: UNIT * 19.6 },
    CARD_HEIGHT_PORTRAIT_REGULAR: { height: UNIT * 22 },
    CARD_HEIGHT_PORTRAIT_DEFAULT: { height: UNIT * 25 },
    CARD_WIDTH_TINY: { width: UNIT * 13 },
    CARD_WIDTH_SMALL: { width: UNIT * 15 },
    CARD_WIDTH_REGULAR: { width: UNIT * 16.8 },
    CARD_WIDTH_DEFAULT: { width: UNIT * 23.6 },

    TEXT_GNOME: { fontSize: FONT.SIZE.GNOME, lineHeight: FONT.SIZE.GNOME * 1.2 },
    TEXT_TINY: { fontSize: FONT.SIZE.TINY, lineHeight: FONT.SIZE.TINY * 1.2 },
    TEXT_SMALL: { fontSize: FONT.SIZE.SMALL, lineHeight: FONT.SIZE.SMALL * 1.2 },
    TEXT_REGULAR: { fontSize: FONT.SIZE.REGULAR, lineHeight: FONT.SIZE.REGULAR * 1.3 },
    TEXT_LARGE: { fontSize: FONT.SIZE.LARGE, lineHeight: FONT.SIZE.LARGE * 1.3 },
    TEXT_SUBTITLE: { fontSize: FONT.SIZE.SUBTITLE, lineHeight: FONT.SIZE.SUBTITLE * 1.3 },
    TEXT_TITLE: { fontSize: FONT.SIZE.TITLE, lineHeight: FONT.SIZE.TITLE * 1.3 },
  }),
};
