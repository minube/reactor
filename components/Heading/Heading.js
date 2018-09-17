import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT, SHAPE, THEME } from '../../common';
import Breadcrumbs from '../Breadcrumbs';
import Avatar from '../Avatar';
import Rating from '../Rating';
import Text from '../Text';
import styles from './Heading.style';

const { COLOR } = THEME;

const Heading = ({
  breadcrumbs, color, column, onBreadcrumb, rating, title,
  contributors: { total, label, preview } = {},
  ...inherit
}) => (
  <View style={[styles.container, inherit.style]}>
    <View style={column ? styles.column : styles.row}>
      <Text
        bold
        title
        color={color}
        style={[LAYOUT.TEXT.TITLE, styles.title]}
      >
        {title}
      </Text>
      { rating.value && <Rating {...rating} textColor={color} /> }
    </View>
    <View style={column ? styles.column : styles.row}>
      { breadcrumbs.length > 0
        && <Breadcrumbs color={color || COLOR.TEXT_LIGHTEN} dataSource={breadcrumbs} onPress={onBreadcrumb} /> }
      { total
        && (
        <View style={column ? styles.row : styles.contributors}>
          <Text bold color={color} tiny>
            {total}
          </Text>
          <Text color={color} tiny>
            {` ${label}`}
          </Text>
          <View style={[styles.avatars]}>
            { preview.map(({ id, image }) => <Avatar key={id} small image={image} style={styles.avatar} />)}
          </View>
        </View>
        ) }
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
  title: string.isRequired,
};

Heading.defaultProps = {
  breadcrumbs: [],
  color: undefined,
  column: false,
  contributors: undefined,
  onBreadcrumb: undefined,
  rating: {},
};

export default Heading;
