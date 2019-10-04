import { number, oneOfType, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '..';
import styles from './FormError.style';

const FormError = ({ icon, title, ...inherit }) => (
  <View style={[styles.container, inherit.style]}>
    <View style={[styles.content]}>
      <Text body level={2} style={styles.text}>{title}</Text>
      {icon && <Icon style={styles.icon} value={icon} />}
    </View>
    <View style={[styles.arrow]} />
  </View>
);

FormError.propTypes = {
  icon: oneOfType([number, string]),
  title: string.isRequired,
};

FormError.defaultProps = {
  icon: undefined,
};

export default FormError;
