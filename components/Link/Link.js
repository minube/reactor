import { array, number, oneOfType } from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Text from '../Text';
import styles from './Link.style';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    const {
      props: { style, styleHover, ...inherit },
      state: { hover },
    } = this;

    return (
      <Text
        {...inherit}
        accessibilityRole="link"
        onMouseEnter={() => inherit.href && this.setState({ hover: true })}
        onMouseLeave={() => inherit.href && this.setState({ hover: false })}
        style={StyleSheet.flatten([
          styles.title,
          hover && styles.hover,
          style,
          hover && styleHover,
        ])}
      />
    );
  }
}

Link.propTypes = {
  style: oneOfType([array, number]),
  styleHover: oneOfType([array, number]),
};

Link.defaultProps = {
  style: [],
  styleHover: [],
};

export default Link;
