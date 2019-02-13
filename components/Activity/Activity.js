import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ENV, THEME } from '../../common';

const { IS_SERVER } = ENV;
const { COLOR, UNIT } = THEME;

export default ({ ...inherit }) => (
  <ActivityIndicator
    {...inherit}
    color={inherit.color || COLOR.BASE}
    style={[
      inherit.style,
      IS_SERVER && { maxHeight: UNIT, maxWidth: UNIT },
    ]}
  />);
