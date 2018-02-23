import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import WebView from '../WebView';
import Text from './Text';

storiesOf('✅ Text', module)
  .addWithJSX('default', () => (
    <Text>Hello World</Text>
  ))
  .addWithJSX('tiny', () => (
    <Text tiny>Hello World</Text>
  ))
  .addWithJSX('small', () => (
    <Text small>Hello World</Text>
  ))
  .addWithJSX('large', () => (
    <Text large>Hello World</Text>
  ))
  .addWithJSX('bold', () => (
    <Text bold>Hello World</Text>
  ))
  .addWithJSX('primary', () => (
    <Text primary>Hello World</Text>
  ))
  .addWithJSX('accent', () => (
    <Text accent>Hello World</Text>
  ))
  .addWithJSX('color', () => (
    <Text color={THEME.COLOR.ERROR}>Hello World</Text>
  ))
  .addWithJSX('style', () => (
    <Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
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
    </WebView>
  ));

