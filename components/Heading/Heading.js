import { array, arrayOf, func, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import Image from '../Image';
import Link from '../Link';
import Rating from '../Rating';
import Text from '../Text';
import styles from './Heading.style';

const { LAYOUT: { AVATAR_SMALL }, UNIT } = THEME;

const Heading = ({
  breadcrumbs, color, contributors: { total, label, preview } = {}, onBreadcrumb, rating, style, title,
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
      { total &&
        <View style={styles.contributors}>
          <Text bold color={color} tiny>{total}</Text>
          <Text color={color} tiny>{` ${label}`}</Text>
          <View style={StyleSheet.flatten([
              styles.avatars,
              { width: (AVATAR_SMALL + (UNIT / 2)) * preview.length },
            ])}
          >
            { preview.map(({ id, image }) =>
              <Image key={id} size="small" style={styles.avatar} source={{ uri: image }} />) }
          </View>
        </View> }
    </View>
  </View>
);

Heading.propTypes = {
  breadcrumbs: arrayOf(shape({})),
  color: string,
  contributors: shape({}),
  onBreadcrumb: func,
  rating: number,
  style: oneOfType([array, number]),
  title: string,
};

Heading.defaultProps = {
  breadcrumbs: [],
  color: undefined,
  contributors: undefined,
  onBreadcrumb() {},
  rating: undefined,
  style: [],
  title: undefined,
};

export default Heading;
