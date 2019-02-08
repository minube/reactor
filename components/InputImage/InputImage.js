import { string } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Image from '../Image';
import Input from '../Input';
import styles from './InputImage.style';

class InputImage extends PureComponent {
  static propTypes = {
    value: string,
  };

  static defaultProps = {
    value: '',
  };

  render() {
    const { props: { value, ...inherit } } = this;
    const isValidUrl = value.length > 0;

    return (
      <View style={[styles.container, inherit.style]}>
        { isValidUrl && <Image source={{ uri: value }} style={styles.image} /> }
        <Input
          {...inherit}
          style={[styles.input, isValidUrl && styles.inputMargin]}
          value={value}
        />
      </View>
    );
  }
}

export default InputImage;
