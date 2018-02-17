import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';

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
  .addWithJSX('with primary', () => (
    <Text primary>Hello World</Text>
  ))
  .addWithJSX('with accent', () => (
    <Text accent>Hello World</Text>
  ))
  .addWithJSX('with color', () => (
    <Text color={THEME.COLOR.ERROR}>Hello World</Text>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Text
      bold={boolean('bold', false)}
      color={color('color', THEME.COLOR.TEXT)}
      small={boolean('small', false)}
      tiny={boolean('tiny', false)}
      large={boolean('large', false)}
      accent={boolean('accent', false)}
      primary={boolean('primary', false)}
    >
      {text('content', 'Hello World')}
    </Text>
  ));

