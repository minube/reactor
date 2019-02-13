import { bool, string } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputLabel.style';

const { COLOR } = THEME;

const InputLabel = ({ color, focus, error, ...inherit }) => {
  let textColor;

  if (focus) textColor = color;
  if (error) textColor = COLOR.ERROR;

  return <Text {...inherit} color={textColor} subtitle level={3} lighten style={[styles.container, inherit.style]} />;
};

InputLabel.propTypes = {
  color: string,
  focus: bool,
  error: bool,
};

InputLabel.defaultProps = {
  color: COLOR.PRIMARY,
  focus: false,
  error: false,
};

export default InputLabel;
