import { array, bool, func, node, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LAYOUT } from '../../common';
import Image from '../Image';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './PictureCard.style';

const IMAGE_PLACEHOLDER = 'https://cdn.mnstatic.com/1/svg/placeholder/eiffel_tower.svg';
const SHORT_TITLE = 10;

const PictureCard = ({
  backgroundColor, children, caption, image, onLoad, onPress, portrait, small, style, title,
}) => (
  <Touchable
    disabled={!onPress}
    onPress={onPress}
    style={StyleSheet.flatten([styles.container, { backgroundColor }, style])}
  >
    <View>
      <Image
        onLoad={onLoad}
        resizeMode={image ? 'cover' : 'center'}
        source={{ uri: image || IMAGE_PLACEHOLDER }}
        style={StyleSheet.flatten([
          styles.image,
          {
            width: LAYOUT.STYLE.CARD.WIDTH,
            height: portrait ? LAYOUT.STYLE.CARD.PORTRAIT : LAYOUT.STYLE.CARD.HEIGHT,
          },
          small && styles.small,
          style,
        ])}
      />
      <View pointerEvents="none" style={styles.content}>
        <View>
          { title &&
            <Text
              bold
              large
              style={StyleSheet.flatten([
                styles.text,
                styles.title,
                title.length < SHORT_TITLE && LAYOUT.STYLE.TEXT.LARGE_SHORT])}
            >
              {title}
            </Text> }
          { caption && <Text tiny style={styles.text}>{caption}</Text> }
        </View>
        { children }
      </View>
    </View>
  </Touchable>
);

PictureCard.propTypes = {
  backgroundColor: string,
  children: node,
  caption: string,
  image: string,
  onLoad: func,
  onPress: func,
  portrait: bool,
  small: bool,
  style: oneOfType([array, number]),
  title: string,
};

PictureCard.defaultProps = {
  backgroundColor: undefined,
  children: undefined,
  caption: undefined,
  image: undefined,
  onLoad: undefined,
  onPress: undefined,
  portrait: false,
  small: false,
  style: [],
  title: undefined,
};

export default PictureCard;
