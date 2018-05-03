import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import LayoutView from '../Layout';
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
  .addWithJSX('title', () => (
    <Text title>Hello World</Text>
  ))
  .addWithJSX('lighter', () => (
    <Text lighter>Hello World</Text>
  ))
  .addWithJSX('semibold', () => (
    <Text semibold>Hello World</Text>
  ))
  .addWithJSX('bold', () => (
    <Text bold>Hello World</Text>
  ))
  .addWithJSX('italic', () => (
    <Text italic>Hello World</Text>
  ))
  .addWithJSX('primary', () => (
    <Text primary>Hello World</Text>
  ))
  .addWithJSX('accent', () => (
    <Text accent>Hello World</Text>
  ))
  .addWithJSX('lighten', () => (
    <Text lighten>Hello World</Text>
  ))
  .addWithJSX('color', () => (
    <Text color={THEME.COLOR.ERROR}>Hello World</Text>
  ))
  .addWithJSX('style', () => (
    <Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Text
        lighter={boolean('lighter', false)}
        semibold={boolean('semibold', false)}
        bold={boolean('bold', false)}
        italic={boolean('italic', false)}
        color={color('color', THEME.COLOR.TEXT)}
        small={boolean('small', false)}
        tiny={boolean('tiny', false)}
        large={boolean('large', false)}
        title={boolean('title', false)}
        accent={boolean('accent', false)}
        lighten={boolean('lighten', false)}
        primary={boolean('primary', false)}
      >
        {text('content', 'Hello World')}
      </Text>
    </LayoutView>
  ));

