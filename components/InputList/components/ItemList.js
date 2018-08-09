import {
  node, oneOfType, shape, string,
} from 'prop-types';
import React, { createElement } from 'react';

import Text from '../../Text';
import styles from './ItemList.style';

const ItemList = ({ template, value = {} }) => (
  template
    ? createElement(template, { ...value })
    : (
      <Text semibold tiny style={styles.text}>
        {typeof value === 'object' ? value.title : value}
      </Text>)
);

ItemList.propTypes = {
  template: node,
  value: oneOfType([string, shape({})]).isRequired,
};

ItemList.defaultProps = {
  template: undefined,
};

export default ItemList;
