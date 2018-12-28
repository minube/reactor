import { bool, func, string } from 'prop-types';
import React, { Fragment } from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import Motion from '../Motion';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './InputOption.style';

const InputOption = ({
  label, onChange, rounded, selected, ...inherit
}) => (
  <Touchable onPress={onChange ? () => onChange(!selected) : undefined} style={[styles.container, inherit.style]}>
    <Fragment>
      <View style={[styles.option, rounded && styles.rounded, selected && styles.selected]}>
        <Motion preset="pop" visible={selected}>
          <Icon value="doneContrast" reverse style={styles.icon} />
        </Motion>
      </View>
      { label && (
        <Text level={2} lighten style={styles.label}>
          {label}
        </Text>)}
    </Fragment>
  </Touchable>
);

InputOption.propTypes = {
  label: string,
  onChange: func,
  rounded: bool,
  selected: bool,
};

InputOption.defaultProps = {
  label: undefined,
  onChange: undefined,
  rounded: true,
  selected: false,
};

export default InputOption;
