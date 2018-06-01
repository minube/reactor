import { bool, func, node, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';
import Image from '../Image';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './PictureCard.style';

const IMAGE_PLACEHOLDER = 'https://cdn.mnstatic.com/1/svg/placeholder/eiffel_tower.svg';
const SHORT_TITLE = 10;

const PictureCard = ({
  backgroundColor, children, caption, image, onLoad, onPress, portrait, small, title, ...inherit
}) => (
  <Touchable
    disabled={!onPress}
    onPress={onPress}
    style={[styles.container, inherit.style, backgroundColor && { backgroundColor }]}
  >
    <View>
      <Image
        onLoad={onLoad}
        resizeMode={image ? 'cover' : 'center'}
        source={{ uri: image || IMAGE_PLACEHOLDER }}
        style={[
          styles.image,
          LAYOUT.STYLE.CARD.WIDTH,
          portrait ? LAYOUT.STYLE.CARD.PORTRAIT : LAYOUT.STYLE.CARD.HEIGHT,
          small && styles.small,
          inherit.style,
        ]}
      />
      <View pointerEvents="none" style={[styles.content, LAYOUT.STYLE.CARD.WIDTH]}>
        <View>
          { title &&
            <Text
              bold
              large
              style={[
                styles.text,
                styles.title,
                title.length < SHORT_TITLE && LAYOUT.STYLE.TEXT.TITLE,
              ]}
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
  title: undefined,
};

export default PictureCard;
