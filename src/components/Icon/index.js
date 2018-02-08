import { array, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Platform, Image } from 'react-native';

import ASSETS from './assets';
import styles from './style';

const Icon = ({ style, value }) => (
  <Image
    resizeMode="contain"
    source={
      Platform.select({
        web: {
          uri: ASSETS[value],
        },
      })
    }
    style={[styles.icon, style]}
  />
);

Icon.propTypes = {
  style: oneOfType([array, number]),
  value: string,
};

Icon.defaultProps = {
  style: [],
  value: undefined,
};

export default Icon;
