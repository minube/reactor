import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Link from '../Link';
import styles from './Breadcrumbs.style';

const Breadcrumbs = ({
  color, dataSource, onPress, ...inherit
}) => (
  <View style={styles.container}>
    { dataSource.map(({ caption, href }, index) => (
      <Link
        href={href}
        key={caption}
        onPress={() => {
          onPress(index);
          return false;
        }}
        style={[styles.link, inherit.style, color && { color }]}
        small
      >
        {`${caption}${index < dataSource.length - 1 ? ' ·' : ''}`}
      </Link>
    ))}
  </View>
);

Breadcrumbs.propTypes = {
  color: string,
  dataSource: arrayOf(shape({})),
  onPress: func,
};

Breadcrumbs.defaultProps = {
  color: undefined,
  dataSource: [],
  onPress() {},
};

export default Breadcrumbs;
