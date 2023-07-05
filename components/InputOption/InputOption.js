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
            target={target}
            color={THEME.COLOR.PRIMARY}
            style={[styles.label]}
        > <div dangerouslySetInnerHTML={{ __html: 'soy un texto <a href="https://www.enlace1.com">Enlace1</a> que tiene dos <a href="https://www.enlace2.com">enlace2</a>' }} /> </Text> }
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
