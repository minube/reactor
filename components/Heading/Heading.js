import { array, arrayOf, bool, func, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import Breadcrumbs from '../Breadcrumbs';
import Image from '../Image';
import Rating from '../Rating';
import Text from '../Text';
import styles from './Heading.style';

const { COLOR, LAYOUT: { AVATAR_SMALL }, UNIT } = THEME;

const Heading = ({
  breadcrumbs, color, column, onBreadcrumb, rating, style, title,
  contributors: { total, label, preview } = {},
}) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <View style={column ? styles.column : styles.row}>
      { title && <Text bold color={color} style={styles.title}>{title}</Text> }
      { rating && <Rating {...rating} textColor={color} /> }
    </View>
    <View style={column ? styles.column : styles.row}>
      { breadcrumbs.length > 0 &&
        <Breadcrumbs color={color || COLOR.TEXT_LIGHTEN} dataSource={breadcrumbs} onPress={onBreadcrumb} /> }
      { total &&
        <View style={column ? styles.row : styles.contributors}>
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
  column: bool,
  contributors: shape({}),
  onBreadcrumb: func,
  rating: number,
  style: oneOfType([array, number]),
  title: string,
};

Heading.defaultProps = {
  breadcrumbs: [],
  color: undefined,
  column: false,
  contributors: undefined,
  onBreadcrumb() {},
  rating: undefined,
  style: [],
  title: undefined,
};

export default Heading;
