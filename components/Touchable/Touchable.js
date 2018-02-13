import { bool } from 'prop-types';
import React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native';


const Touchable = ({ raised, ...inherit }) => {
  if (raised) return <TouchableOpacity {...inherit} />;

  return Platform.OS !== 'android'
    ? <TouchableHighlight underlayColor="rgba(0,0,0,0.15)" activeOpacity={0.85} {...inherit} />
    : <TouchableNativeFeedback useForeground {...inherit} />;
};

Touchable.propTypes = {
  raised: bool,
};

Touchable.defaultProps = {
  raised: false,
};

export default Touchable;
