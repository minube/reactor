import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ENV, THEME } from '../../common';

const { IS_SERVER } = ENV;
const { COLOR, UNIT } = THEME;

export default ({ ...inherit }) => (
  <ActivityIndicator
    {...inherit}
    color={COLOR.BORDER}
    style={[
      inherit.style,
      IS_SERVER && { maxHeight: UNIT, maxWidth: UNIT },
    ]}
  />);
