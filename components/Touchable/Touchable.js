import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

export default ({ ...inherit }) => (
  Platform.OS !== 'android'
    ? <TouchableOpacity {...inherit} />
    : <TouchableNativeFeedback useForeground {...inherit} />
);
