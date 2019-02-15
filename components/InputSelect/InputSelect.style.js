import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';

const {
  BORDER_RADIUS, COLOR, FONT, UNIT,
} = THEME;

export default StyleSheet.create({
  active: {
    zIndex: 1,
  },

  border: {
    borderColor: COLOR.BASE,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    width: '100%',
  },

  button: {
    position: 'absolute',
    top: TEMPLATE_HEIGHT / 2 - (INPUT_HEIGHT / 2),
    right: 0,
    zIndex: 1,
  },

  container: {
    marginBottom: UNIT * 2.2,
    maxWidth: '100%',
  },

  dataSource: {
    ...LAYOUT.STYLE.SHADOW,
    position: 'absolute',
    backgroundColor: COLOR.WHITE,
    maxHeight: TEMPLATE_HEIGHT * 5,
  },

  dataSourceBottom: {
    bottom: 0,
  },

  dataSourceHidden: {
    display: 'none',
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
    marginLeft: UNIT / 2,
    marginRight: UNIT,
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
    paddingLeft: UNIT,
    paddingRight: UNIT * 4.4,
    height: TEMPLATE_HEIGHT,
  },

  withLabel: {
    marginTop: UNIT * 2.2,
  },
});
