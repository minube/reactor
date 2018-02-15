import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Text from './Text';

storiesOf('✅ Text', module)
  .addWithJSX('default', () => (
    <Text>Hello World</Text>
  ))
  .addWithJSX('with tiny', () => (
    <Text tiny>Hello World</Text>
  ))
  .addWithJSX('with small', () => (
    <Text small>Hello World</Text>
  ))
  .addWithJSX('with large', () => (
    <Text large>Hello World</Text>
  ))
  .addWithJSX('with bold', () => (
    <Text bold>Hello World</Text>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Text
      tiny={boolean('tiny', false)}
      small={boolean('small', false)}
      large={boolean('large', false)}
      bold={boolean('bold', false)}
    >
      {text('content', 'Hello World')}
    </Text>
  ));

