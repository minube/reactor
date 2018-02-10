import { array, bool, func, node, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import { STYLE } from '../../common';
import { Icon, PictureCard } from '../';
import styles from './ListingCard.style';

const ListingCard = ({
  children, comment, description, empty, onPress, rating, style, title, ...inherit
}) => (
  <View style={[styles.container, empty ? styles.empty : styles.elevation, style]}>
    <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
      <View>
        <PictureCard {...inherit} elevation={false} />
        <View style={styles.content}>
          { title && <Text style={styles.title}>{title}</Text> }
          { rating &&
            <View style={STYLE.ROW}>
              { Array.from(Array(rating).keys()).map(rate => <Icon key={rate} value="star" style={styles.rating} />) }
            </View> }
          { description && <Text style={styles.description}>{description}</Text> }
          { comment &&
            <View style={[STYLE.ROW, styles.commentContent]}>
              { comment.avatar && <Image style={styles.avatar} source={{ uri: comment.avatar }} /> }
              <Text style={styles.comment}>{comment.text}</Text>
            </View> }
        </View>
      </View>
    </TouchableWithoutFeedback>
    { children && <View style={[styles.content, styles.children]}>{children}</View> }
  </View>
);

ListingCard.propTypes = {
  children: node,
  comment: shape({
    image: string,
    text: string,
  }),
  description: string,
  empty: bool,
  image: string,
  onPress: func,
  rating: number,
  style: oneOfType([array, number]),
  title: string,
};

ListingCard.defaultProps = {
  children: undefined,
  comment: undefined,
  description: undefined,
  empty: false,
  image: undefined,
  onPress: undefined,
  rating: undefined,
  style: [],
  title: undefined,
};

export default ListingCard;
