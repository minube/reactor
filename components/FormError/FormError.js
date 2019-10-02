import { number, oneOfType, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '..';
import styles from './FormError.style';

const ErrorsPreview = ({ icon, title }) => (
  <View style={[styles.container]}>
    <View style={[styles.content]}>
      <Text body level={2} style={styles.text}>{title}</Text>
      {icon && <Icon style={styles.icon} value={icon} />}
    </View>
    <View style={[styles.arrow]} />
  </View>
);

ErrorsPreview.propTypes = {
  icon: oneOfType([number, string]),
  title: string.isRequired,
};

ErrorsPreview.defaultProps = {
  icon: undefined,
};

export default ErrorsPreview;
