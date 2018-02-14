import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import styles from './Text.style';

const Text = ({ ...inherit }) =>
  <NativeText {...inherit} style={StyleSheet.compose(styles.container, inherit.style)} />;

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
