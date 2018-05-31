import { array, arrayOf, bool, func, number, object, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LAYOUT, SHAPE, THEME } from '../../common';
import Breadcrumbs from '../Breadcrumbs';
import Avatar from '../Avatar';
import Rating from '../Rating';
import Text from '../Text';
import styles from './Heading.style';

const { AVATAR: { SMALL }, COLOR, UNIT } = THEME;

const Heading = ({
  breadcrumbs, color, column, onBreadcrumb, rating, style, title,
  contributors: { total, label, preview } = {},
}) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <View style={column ? styles.column : styles.row}>
      <Text
        bold
        title
        color={color}
        style={[LAYOUT.STYLE.TEXT.TITLE, styles.title]}
      >
        {title}
      </Text>
      { rating.value && <Rating {...rating} textColor={color} /> }
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
              { width: (SMALL + (UNIT / 2)) * preview.length },
            ])}
          >
            { preview.map(({ id, image }) => <Avatar key={id} small image={image} />)}
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
  rating: shape(SHAPE.RATING),
  style: oneOfType([array, number, object]),
  title: string.isRequired,
};

Heading.defaultProps = {
  breadcrumbs: [],
  color: undefined,
  column: false,
  contributors: undefined,
  onBreadcrumb: undefined,
  rating: {},
  style: [],
};

export default Heading;
