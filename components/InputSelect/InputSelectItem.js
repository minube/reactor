import { bool, func, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Text from '../Text';
import Touchable from '../Touchable';
import InputOption from '../InputOption';
import styles from './InputSelectItem.style';

const { COLOR } = THEME;

class Template extends PureComponent {
  static propTypes = {
    caption: string,
    onPress: func,
    selected: bool,
    title: string.isRequired,
  };

  static defaultProps = {
    caption: undefined,
    onPress: undefined,
    selected: false,
  };

  render() {
    const {
      caption, title, onPress, selected,
    } = this.props;

    return (
      <Touchable onPress={onPress} rippleColor={COLOR.PRIMARY}>
        <View style={styles.container}>
          <InputOption value={selected} style={{ marginBottom: 0 }} />
          <View style={styles.texts}>
            <Text level={2}>
              {title}
            </Text>
            { caption && (
              <Text caption level={2} lighten>
                {caption}
              </Text>)}
          </View>
        </View>
      </Touchable>
    );
  }
}

export default Template;
