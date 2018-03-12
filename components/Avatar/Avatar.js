import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Activity from '../Activity';
import styles from './Avatar.style';
import Image from '../Image';
import Link from '../Link';
import { THEME } from '../../common';

const {
   AVATAR,
} = THEME;

const Avatar = ({
  small, regular, large, image, href, style
}) => (
  <View>
    <Link href={href}>
      <Image source={{ uri: image }}
        style={StyleSheet.flatten([
          small && styles.small,
          regular && styles.regular,
          large && styles.large,
          style,
        ])}/>
    </Link>
  </View>
);
Avatar.propTypes = {
  small: bool,
  regular: bool,
  large: bool,
  image: string.isRequired,
  href: string
};

Avatar.defaultProps = {
  small: false,
  regular: true,
  large: false,
  href:undefined
};

export default Avatar;
