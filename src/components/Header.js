import { array, bool, node, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { STYLE } from '../common';
import ProgressBar from './ProgressBar';
import styles from './Header.style';

const Header = ({
  children, description, loading, style, title,
}) => (
  <View style={[STYLE.ROW, STYLE.SHADOW, styles.header, style]}>
    { loading && <ProgressBar indeterminate style={styles.loading} /> }
    <View style={[STYLE.ROW, styles.content]}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      { description && <Text style={[styles.text, styles.description]}>{` / ${description}`}</Text> }
    </View>
    { children && <View style={[STYLE.ROW, styles.children]}>{children}</View> }
  </View>
);

Header.propTypes = {
  children: node,
  description: string,
  loading: bool,
  style: oneOfType([array, number]),
  title: string,
};

Header.defaultProps = {
  children: undefined,
  description: undefined,
  loading: false,
  style: [],
  title: undefined,
};

export default Header;
