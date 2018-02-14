import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Text from './Text';

storiesOf('Text', module)
  .addWithJSX('default', () => (
    <Text>Hello World</Text>
  ))
  .addWithJSX('with title', () => (
    <Text title>Hello World</Text>
  ))
  .addWithJSX('with subtitle', () => (
    <Text subtitle>Hello World</Text>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Text
      title={boolean('title', false)}
      subtitle={boolean('subtitle', false)}
    >
      {text('content', 'Hello World')}
    </Text>
  ));

