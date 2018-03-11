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
  small, medium, big, image, href, style
}) => (
  <View >
    <Link href={href}>
      <Image source={{ uri: image }}
        style={StyleSheet.flatten([
          small && styles.small,
          medium && styles.medium,
          big && styles.big,
          style,
        ])}/>
    </Link>
  </View>
);

Avatar.propTypes = {
  small: bool,
  medium: bool,
  big: bool,
  image: string,
  link:string
};

Avatar.defaultProps = {
  small: false,
  medium: false,
  big: false,
  image: undefined,
  link:undefined
};

export default Avatar;
