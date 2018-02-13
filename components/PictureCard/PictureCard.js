import { array, bool, func, node, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { Touchable } from '../';
import styles from './PictureCard.style';

const IMAGE_PLACEHOLDER = 'https://cdn.mnstatic.com/1/svg/placeholder/eiffel_tower.svg';

const PictureCard = ({
  children, caption, small, image, location, onPress, style, title,
}) => (
  <Touchable disabled={!onPress} onPress={onPress} style={style}>
    <ImageBackground
      resizeMode={image ? 'cover' : 'center'}
      source={{ uri: image || IMAGE_PLACEHOLDER }}
      style={[styles.container, small && styles.small, style]}
    >
      { image !== IMAGE_PLACEHOLDER && <View pointerEvents="none" style={image && styles.opacity} /> }
      { location && <Text style={[styles.text, styles.location]}>{location.toUpperCase()}</Text> }
      <View pointerEvents="none" style={location ? styles.contentBottom : styles.content}>
        { title && <Text style={[styles.text, styles.title]}>{title}</Text> }
        { caption && <Text style={[styles.text, styles.caption]}>{caption}</Text> }
      </View>
      { children }
    </ImageBackground>
  </Touchable>
);

PictureCard.propTypes = {
  children: node,
  location: string,
  caption: string,
  small: bool,
  image: string,
  onPress: func,
  style: oneOfType([array, number]),
  title: string,
};

PictureCard.defaultProps = {
  children: undefined,
  location: undefined,
  caption: undefined,
  small: false,
  image: undefined,
  onPress: undefined,
  style: [],
  title: undefined,
};

export default PictureCard;
