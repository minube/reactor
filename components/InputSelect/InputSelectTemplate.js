import { bool, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Text from '../Text';
import InputOption from '../InputOption';
import styles from './InputSelectTemplate.style';

class InputSelectTemplate extends PureComponent {
  static propTypes = {
    active: bool,
    caption: string,
    disabled: bool,
    selected: bool,
    title: string.isRequired,
  };

  static defaultProps = {
    active: false,
    caption: undefined,
    disabled: undefined,
    selected: false,
  };

  render() {
    const {
      active, caption, disabled, title, selected, ...inherit
    } = this.props;

    return (
      <View style={inherit.style}>
        <InputOption value={active || selected} style={styles.inputOption} />
        <View style={styles.texts}>
          <Text lighten={disabled} style={styles.title}>
            {title}
          </Text>
          { caption && (
            <Text caption level={2} lighten>
              {caption}
            </Text>)}
        </View>
      </View>
    );
  }
}

export default InputSelectTemplate;
