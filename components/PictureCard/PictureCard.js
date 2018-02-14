import { array, bool, func, node, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { Text, Touchable } from '../';
import styles from './PictureCard.style';

const IMAGE_PLACEHOLDER = 'https://cdn.mnstatic.com/1/svg/placeholder/eiffel_tower.svg';

const PictureCard = ({
  children, caption, image, location, onPress, small, square, style, title,
}) => (
  <Touchable disabled={!onPress} onPress={onPress} style={style}>
    <ImageBackground
      resizeMode={image ? 'cover' : 'center'}
      source={{ uri: image || IMAGE_PLACEHOLDER }}
      style={StyleSheet.flatten([
        styles.container,
        small && styles.small,
        square && styles.square,
        style,
      ])}
    >
      { image !== IMAGE_PLACEHOLDER && <View pointerEvents="none" style={image && styles.opacity} /> }
      { location && <Text style={StyleSheet.flatten([styles.text, styles.location])}>{location.toUpperCase()}</Text> }
      <View pointerEvents="none" style={location ? styles.contentBottom : styles.content}>
        { title && <Text style={StyleSheet.flatten([styles.text, styles.title])}>{title}</Text> }
        { caption && <Text style={StyleSheet.flatten([styles.text, styles.caption])}>{caption}</Text> }
      </View>
      { children }
    </ImageBackground>
  </Touchable>
);

PictureCard.propTypes = {
  children: node,
  location: string,
  caption: string,
  image: string,
  onPress: func,
  small: bool,
  square: bool,
  style: oneOfType([array, number]),
  title: string,
};

PictureCard.defaultProps = {
  children: undefined,
  location: undefined,
  caption: undefined,
  image: undefined,
  onPress: undefined,
  small: false,
  square: false,
  style: [],
  title: undefined,
};

export default PictureCard;
