import { array, node, number, oneOfType } from 'prop-types';
import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Content.style';

const Content = ({
  children, style,
}) => (
  <ScrollView style={[styles.container, style]}>
    <View style={[styles.wrapper]}>
      {children}
    </View>
  </ScrollView>
);

Content.propTypes = {
  children: node,
  style: oneOfType([array, number]),
};

Content.defaultProps = {
  children: undefined,
  style: [],
};

export default Content;
