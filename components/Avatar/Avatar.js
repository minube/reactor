import { bool, string } from 'prop-types';
import React from 'react';

import Image from '../Image';
import styles from './Avatar.style';

const Avatar = ({
  image, large, small, ...inherit
}) => (
  <Image
    resizeMode="cover"
    source={{ uri: image }}
    style={[
      styles.image,
      large && styles.large,
      small && styles.small,
      inherit.style,
    ]}
  />
);
Avatar.propTypes = {
  image: string.isRequired,
  large: bool,
  small: bool,
};

Avatar.defaultProps = {
  large: false,
  small: false,
};

export default Avatar;
