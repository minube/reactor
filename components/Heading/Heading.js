import { array, arrayOf, func, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Rating from '../Rating';
import Text from '../Text';
import Link from '../Link';
import styles from './Heading.style';

const Heading = ({
  breadcrumbs, onBreadcrumb, rating, style, color, title,
}) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <View style={styles.content}>
      { title && <Text bold color={color} style={styles.title}>{title}</Text> }
      { rating && <Rating color={color} value={rating} style={styles.rating} /> }
    </View>
    <View style={styles.content}>
      { breadcrumbs.map(({ caption, href }, index) => (
        <Link
          color={color}
          href={href}
          key={caption}
          onPress={() => onBreadcrumb(index)}
          style={styles.breadcrumb}
          tiny
        >
          {`${caption}${index < breadcrumbs.length - 1 ? ' ·' : ''}`}
        </Link>
      ))}
      <View style={styles.contributors}>
        <Text bold color={color} tiny>234</Text>
        <Text color={color} tiny> colaboratores</Text>
      </View>
    </View>
  </View>
);

Heading.propTypes = {
  color: string,
  breadcrumbs: arrayOf(shape({})),
  onBreadcrumb: func,
  rating: number,
  style: oneOfType([array, number]),
  title: string,
};

Heading.defaultProps = {
  breadcrumbs: [],
  color: undefined,
  onBreadcrumb() {},
  rating: undefined,
  style: [],
  title: undefined,
};

export default Heading;
