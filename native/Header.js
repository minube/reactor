import { func, node, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '../components';
import styles from './Header.style';

const Header = ({ children, onBack, title }) => (
  <View style={styles.container}>
    { onBack && <Button contained={false} icon="navLeft" onPress={onBack} /> }
    <Text headline level={6} style={styles.title}>{title}</Text>
    { children && <View style={styles.children}>{children}</View> }
  </View>
);

Header.propTypes = {
  children: node,
  title: string.isRequired,
  onBack: func,
};

Header.defaultProps = {
  children: undefined,
  onBack: undefined,
};

export default Header;
