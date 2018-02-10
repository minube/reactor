import { array, number, oneOfType } from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './Link.style';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    const {
      props: { style, styleHover },
      state: { hover },
    } = this;

    return (
      <Text
        {...this.props}
        accessibilityRole="link"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        style={[
          styles.title,
          hover && styles.hover,
          style,
          hover && styleHover,
        ]}
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
