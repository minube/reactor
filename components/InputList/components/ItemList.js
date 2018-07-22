import {
  node, shape,
} from 'prop-types';
import React, { createElement } from 'react';

import Text from '../../Text';
import styles from './ItemList.style';

const Item = ({ template, value = {} }) => (
  template
    ? createElement(template, { ...value })
    : (
      <Text small style={styles.text}>
        {value}
      </Text>)
);

Item.propTypes = {
  template: node.isRequired,
  value: shape({}),
};

export default Item;
