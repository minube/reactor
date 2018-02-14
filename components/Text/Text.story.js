import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Text from './Text';

storiesOf('Text', module)
  .addWithJSX('default', () => (
    <Text>Hello World</Text>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Customized Text</Text>
  ))

