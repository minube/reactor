import { bool, func, string } from 'prop-types';
import React, { Fragment } from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import InputLabel from '../Input/InputLabel';
import Motion from '../Motion';
import Touchable from '../Touchable';
import styles from './InputOption.style';
import Link from '../Link/Link';
import { THEME } from '../../common';
import Text from '../Text';

const InputOption = ({
  label, onChange, rounded,link,target='_blank', value, ...inherit
}) => (
    <View style={[styles.container, inherit.style]}>
      <Touchable onPress={onChange ? () => onChange(!value) : undefined} >
        <Fragment>
          <View style={[styles.option, rounded && styles.rounded, value && styles.selected]}>
            <Motion preset="pop" visible={value}>
              <Icon value="doneContrast" reverse style={styles.icon} />
            </Motion>
          </View>
        </Fragment>
      </Touchable>
        { label && <Text
            {...inherit}
            accessibilityRole="link"
            href={link}
            target={target}
            color={THEME.COLOR.PRIMARY}
            style={[styles.label]}
        >{label}</Text> }
    </View>
);

InputOption.propTypes = {
  label: string,
  onChange: func,
  rounded: bool,
  value: bool,
};

InputOption.defaultProps = {
  label: undefined,
  onChange: undefined,
  rounded: true,
  value: false,
};

export default InputOption;
