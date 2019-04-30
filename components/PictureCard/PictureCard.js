import {
  bool, func, node, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';
import Image from '../Image';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './PictureCard.style';

const SHORT_TITLE = 10;

const PictureCard = ({
  backgroundColor, children, caption, image, onLoad, onPress, portrait, small, title, ...inherit
}) => (
  <Touchable disabled={!onPress} onPress={onPress} _style={inherit.styleContainer}>
    <View
      style={[
        styles.content,
        styles.borderRadius,
        LAYOUT.CARD.WIDTH,
        inherit.styleContainer,
        backgroundColor && { backgroundColor },
      ]}
    >
      <Image
        onLoad={onLoad}
        resizeMode={image ? 'cover' : 'center'}
        source={{ uri: image }}
        style={[
          styles.borderRadius,
          styles.image,
          LAYOUT.CARD.WIDTH,
          portrait ? LAYOUT.CARD.PORTRAIT : LAYOUT.CARD.HEIGHT,
          small && styles.small,
          inherit.style,
        ]}
      />
      <View pointerEvents="none" style={styles.info}>
        <View>
          { title
            && (
            <Text headline level={title.length < SHORT_TITLE ? 4 : 5} style={styles.text}>
              {title}
            </Text>
            ) }
          { caption && (
          <Text caption style={styles.text}>
            {caption}
          </Text>
          ) }
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
