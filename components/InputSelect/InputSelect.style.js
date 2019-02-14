import { StyleSheet } from 'react-native';

import { THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  border: {
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderRadius: UNIT / 4,
    width: '100%',
  },

  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },

  buttonWithCaption: {
    top: TEMPLATE_HEIGHT / 2 - (INPUT_HEIGHT / 2),
  },

  container: {
    marginBottom: UNIT * 2.2,
    maxWidth: '100%',
  },

  dataSource: {
    position: 'absolute',
    backgroundColor: COLOR.WHITE,
    maxHeight: INPUT_HEIGHT * 5,
  },

  dataSourceHidden: {
    display: 'none',
  },

  dataSourceWithCaption: {
    maxHeight: TEMPLATE_HEIGHT * 5,
  },

  bottom: {
    bottom: 0,
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  withLabel: {
    marginTop: UNIT * 2.2,
  },
});
