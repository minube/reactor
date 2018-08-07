import {
  func, node, shape, string,
} from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { LAYOUT, SHAPE } from '../../common';
import PictureCard from '../PictureCard';
import Rating from '../Rating';
import Text from '../Text';

import styles from './ListingCard.style';

const ListingCard = ({
  category, children, description, onPress, rating = {}, title, ...inherit
}) => (
  <View style={inherit.styleContainer}>
    <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
      <View style={[styles.container, LAYOUT.STYLE.CARD.WIDTH]}>
        <PictureCard {...inherit} styleContainer={null} />
        <View style={styles.content}>
          { category && (
          <Text lighten tiny>
            {category}
          </Text>
          ) }
          { title && (
          <Text bold small numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          ) }
          { rating.value && <Rating {...rating} style={styles.rating} /> }
          { description && (
          <Text lighten tiny numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
          ) }
          { children }
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

ListingCard.propTypes = {
  category: string,
  children: node,
  description: string,
  image: string,
  onPress: func,
  rating: shape(SHAPE.RATING),
  title: string,
};

ListingCard.defaultProps = {
  category: undefined,
  children: undefined,
  description: undefined,
  image: undefined,
  onPress: undefined,
  rating: {},
  title: undefined,
};

export default ListingCard;
