import { bool, func, string } from 'prop-types';
import React, { Fragment } from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import Motion from '../Motion';
import Touchable from '../Touchable';
import styles from './PrivacyTerms.style';

import { THEME } from '../../common';
import Text from '../Text';

const PrivacyTerms = ({
  label, onChange, rounded, replaces, value, ...inherit
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
            color={THEME.COLOR.Text}
            style={[styles.label]}
        > <span dangerouslySetInnerHTML={{ __html: label
          .replace('_POLICY_TERMS_','<a href="'+replaces.POLICY_TERMS_URL.toString()+'" target="_blank" style="color:'+THEME.COLOR.PRIMARY+'">'+replaces.POLICY_TERMS.toString()+'</a>')
          .replace('_POLICY_PRIVACY_','<a href="'+replaces.POLICY_PRIVACY_URL.toString()+'" target="_blank" style="color:'+THEME.COLOR.PRIMARY+'">'+replaces.POLICY_PRIVACY.toString()+'</a>') }} />
        </Text> }
    </View>
);

PrivacyTerms.propTypes = {
  label: string,
  onChange: func,
  rounded: bool,
  value: bool,
};

PrivacyTerms.defaultProps = {
  label: undefined,
  onChange: undefined,
  rounded: true,
  value: false,
};

export default PrivacyTerms;
