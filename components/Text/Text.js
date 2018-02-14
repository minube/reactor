import { bool } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import styles from './Text.style';

const Text = ({
  title,
  subtitle,
  ...inherit
}) => (
  <NativeText
    {...inherit}
    style={StyleSheet.flatten([
      styles.container,
      subtitle && styles.subtitle,
      title && styles.title,
      inherit.style,
    ])}
  />
);

Text.propTypes = {
  subtitle: bool,
  title: bool,
};

Text.defaultProps = {
  subtitle: false,
  title: false,
};

export default Text;
