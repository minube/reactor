import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import LayoutView from '../Layout';
import Text from './Text';

const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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
  .addWithJSX('subtitle', () => (
    <Text subtitle>Hello World</Text>
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
  .addWithJSX('numberOfLines', () => (
    <LayoutView>
      <Text small numberOfLines={2}>{LIPSUM}</Text>
    </LayoutView>
  ))
  .addWithJSX('style', () => (
    <Text style={{ backgroundColor: 'blue', color: 'orange' }}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView style={{ width: '100%' }}>
      <Text
        lighter={boolean('lighter', false)}
        semibold={boolean('semibold', false)}
        bold={boolean('bold', false)}
        italic={boolean('italic', false)}
        color={color('color', THEME.COLOR.TEXT)}
        small={boolean('small', false)}
        tiny={boolean('tiny', false)}
        large={boolean('large', false)}
        subtitle={boolean('subtitle', false)}
        title={boolean('title', false)}
        accent={boolean('accent', false)}
        lighten={boolean('lighten', false)}
        primary={boolean('primary', false)}
        numberOfLines={number('numberOfLines', 1)}
      >
        {text('content', LIPSUM)}
      </Text>
    </LayoutView>
  ));
