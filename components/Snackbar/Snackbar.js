import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Button from '../Button';
import Dialog from '../Dialog';
import Text from '../Text';
import styles from './Snackbar.style';

const { COLOR } = THEME;

const Snackbar = ({
  button, caption, onPress, ...inherit
}) => (
  <Dialog visible={inherit.visible} background={false} style={styles.frame} styleContainer={styles.dialog}>
    <View style={styles.container}>
      <Text level={2} style={styles.caption}>
        {caption}
      </Text>
      { button && (
        <Button
          color={COLOR.SECONDARY}
          {...inherit}
          contained={false}
          small
          onPress={onPress}
          style={styles.button}
          title={button.toUpperCase()}
        />)}
    </View>
  </Dialog>
);

Snackbar.propTypes = {
  button: string,
  caption: string,
  onPress: func,
};

Snackbar.defaultProps = {
  button: undefined,
  caption: undefined,
  onPress: undefined,
};

export default Snackbar;
