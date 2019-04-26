import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';

const {
  BORDER_RADIUS, COLOR, ELEVATION, FONT, UNIT, SPACE,
} = THEME;

export default StyleSheet.create({
  active: {
    zIndex: 1,
    ...Platform.select({
      android: {
        zIndex: undefined,
      },
    }),
  },

  border: {
    borderColor: COLOR.BASE,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    overflow: 'hidden',
    width: '100%',
  },

  button: {
    position: 'absolute',
    top: TEMPLATE_HEIGHT / 2 - (INPUT_HEIGHT / 2),
    right: 0,
    zIndex: 1,
  },

  container: {
    marginBottom: SPACE.REGULAR,
    maxWidth: '100%',
  },

  dataSource: {
    backgroundColor: COLOR.WHITE,
    position: 'absolute',
  },

  dataSourceBottom: {
    bottom: 0,
  },

  dataSourceActive: {
    ...ELEVATION.REGULAR,
    ...Platform.select({
      android: {
        zIndex: 2,
      },
    }),
  },

  dataSourceHidden: {
    display: 'none',
    maxHeight: 0,
    opacity: 0,
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  picker: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    height: INPUT_HEIGHT,
    marginLeft: SPACE.XXS,
    marginRight: SPACE.XS,
    ...Platform.select({
      web: {
        color: COLOR.TEXT,
      },
      android: {
        color: COLOR.TEXT,
      },
      ios: {
        height: 'auto',
      },
    }),
  },

  pickerDisabled: Platform.select({
    web: {
      color: COLOR.TEXT_LIGHTEN,
    },
    android: {
      color: COLOR.TEXT_LIGHTEN,
    },
  }),

  pickerItem: {
    ...FONT.INPUT,
    fontSize: UNIT * 1.6,
  },

  template: {
    ...LAYOUT.STYLE.ROW,
    paddingLeft: SPACE.XS,
    paddingRight: UNIT * 4.4,
    height: TEMPLATE_HEIGHT,
  },

  withLabel: {
    marginTop: SPACE.REGULAR,
  },
});
