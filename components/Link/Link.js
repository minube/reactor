import { array, number, object, oneOfType, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';

import Text from '../Text';
import styles from './Link.style';

class Link extends PureComponent {
  state = {
    hover: false,
  }

  render() {
    const {
      props: {
        href, style, styleHover, ...inherit
      },
      state: { hover },
    } = this;

    return (
      <Text
        {...inherit}
        accessibilityRole="link"
        href={href}
        onMouseEnter={() => inherit.href && this.setState({ hover: true })}
        onMouseLeave={() => inherit.href && this.setState({ hover: false })}
        style={StyleSheet.flatten([
          style,
          hover && styles.hover,
          hover && styleHover,
        ])}
      />
    );
  }
}

Link.propTypes = {
  href: string.isRequired,
  style: oneOfType([array, number, object]),
  styleHover: oneOfType([array, number, object]),
};

Link.defaultProps = {
  style: [],
  styleHover: [],
};

export default Link;
