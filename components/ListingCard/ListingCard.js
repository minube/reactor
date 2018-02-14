import { array, bool, func, node, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { PictureCard, Rating, Text } from '../';
import styles from './ListingCard.style';

const ListingCard = ({
  category, children, description, empty, onPress, rating, ratingCount, style, title, ...inherit
}) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
      <View>
        <PictureCard {...inherit} />
        <View style={styles.content}>
          { category && <Text style={styles.caption}>{category}</Text> }
          { title && <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text> }
          { rating > 0 && <Rating count={ratingCount} value={rating} style={styles.rating} /> }
          { description && <Text numberOfLines={3} ellipsizeMode="tail" style={styles.caption}>{description}</Text> }
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
  rating: number,
  ratingCount: number,
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
  rating: undefined,
  ratingCount: undefined,
  style: [],
  title: undefined,
};

export default ListingCard;
