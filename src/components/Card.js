import { array, bool, func, node, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import { STYLE } from '../common';
import Icon from './Icon';
import styles from './Card.style';

const IMAGE_PLACEHOLDER = 'https://cdn.mnstatic.com/1/svg/placeholder/eiffel_tower.svg';

const Card = ({
  children, comment, description, empty, image, onPress, rating, style, title,
}) => (
  <View style={[styles.container, !empty && STYLE.SHADOW, style]}>
    <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
      <View>
        <View style={[STYLE.CENTERED, styles.image]}>
          { image &&
            <Image
              resizeMode="contain"
              style={image === IMAGE_PLACEHOLDER ? styles.placeholder : styles.image}
              source={{ uri: image }}
            /> }
        </View>
        { !empty &&
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
          </View> }
      </View>
    </TouchableWithoutFeedback>
    { children && <View style={[styles.content, styles.children]}>{children}</View> }
  </View>
);

Card.propTypes = {
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

Card.defaultProps = {
  children: undefined,
  comment: undefined,
  description: undefined,
  empty: false,
  image: IMAGE_PLACEHOLDER,
  onPress: undefined,
  rating: undefined,
  style: [],
  title: undefined,
};

export default Card;
