import { bool } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputLabel.style';

const { COLOR } = THEME;

const InputLabel = ({ focus, error, ...inherit }) => {
  let color;

  if (focus) color = COLOR.PRIMARY;
  if (error) color = COLOR.ERROR;

  return <Text {...inherit} color={color} subtitle level={3} lighten style={styles.container} />;
};

InputLabel.propTypes = {
  focus: bool,
  error: bool,
};

InputLabel.defaultProps = {
  focus: false,
  error: false,
};

export default InputLabel;
