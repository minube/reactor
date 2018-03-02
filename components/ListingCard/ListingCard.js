import { array, bool, func, node, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { layout, SHAPE } from '../../common';
import { PictureCard, Rating, Text } from '../';
import styles from './ListingCard.style';

const ListingCard = ({
  category, children, description, empty, onPress, rating = {}, style, title,
  layout: { CARD } = layout(), // eslint-disable-line
  ...inherit
}) => (
  <View style={StyleSheet.flatten([styles.container, { width: CARD.WIDTH }, style])}>
    <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
      <View>
        <PictureCard {...inherit} />
        <View style={styles.content}>
          { category && <Text lighten tiny>{category}</Text> }
          { title && <Text bold small numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text> }
          { rating.value && <Rating {...rating} style={styles.rating} /> }
          { description && <Text lighten tiny numberOfLines={3} ellipsizeMode="tail">{description}</Text> }
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
  empty: bool,
  image: string,
  onPress: func,
  rating: shape(SHAPE.RATING),
  style: oneOfType([array, number]),
  title: string,
};

ListingCard.defaultProps = {
  category: undefined,
  children: undefined,
  description: undefined,
  empty: false,
  image: undefined,
  onPress: undefined,
  rating: {},
  style: [],
  title: undefined,
};

export default ListingCard;
