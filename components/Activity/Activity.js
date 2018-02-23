import React from 'react';
import { ActivityIndicator } from 'react-native';

import { THEME } from '../../common';

const { COLOR } = THEME;

export default ({ ...inherit }) => <ActivityIndicator color={COLOR.BORDER} {...inherit} />;
