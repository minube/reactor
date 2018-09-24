import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Text from './Text';

const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const style = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  padding: 10,
};

storiesOf('✅ Text', module)
  .addWithJSX('default', () => (
    <Text>Hello World</Text>
  ))
  .addWithJSX('headline (0)', () => (
    <Text headline level={0}>Hello World</Text>
  ))
  .addWithJSX('headline (1)', () => (
    <Text headline level={1}>Hello World</Text>
  ))
  .addWithJSX('headline (2)', () => (
    <Text headline level={2}>Hello World</Text>
  ))
  .addWithJSX('headline (3)', () => (
    <Text headline level={3}>Hello World</Text>
  ))
  .addWithJSX('headline (4)', () => (
    <Text headline level={4}>Hello World</Text>
  ))
  .addWithJSX('headline (5)', () => (
    <Text headline level={5}>Hello World</Text>
  ))
  .addWithJSX('headline (6)', () => (
    <Text headline level={6}>Hello World</Text>
  ))
  .addWithJSX('subtitle (1)', () => (
    <Text subtitle level={1}>Hello World</Text>
  ))
  .addWithJSX('subtitle (2)', () => (
    <Text subtitle level={2}>Hello World</Text>
  ))
  .addWithJSX('subtitle (3)', () => (
    <Text subtitle level={3}>Hello World</Text>
  ))
  .addWithJSX('body (1)', () => (
    <Text body level={1}>Hello World</Text>
  ))
  .addWithJSX('body (2)', () => (
    <Text body level={2}>Hello World</Text>
  ))
  .addWithJSX('body (3)', () => (
    <Text body level={3}>Hello World</Text>
  ))
  .addWithJSX('caption', () => (
    <Text body caption>Hello World</Text>
  ))
  .addWithJSX('lighten', () => (
    <Text lighten>Hello World</Text>
  ))
  .addWithJSX('color', () => (
    <Text color={THEME.COLOR.ERROR}>Hello World</Text>
  ))
  .addWithJSX('style', () => (
    <Text style={style}>Customized Text</Text>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Text
      headline={boolean('headline', false)}
      subtitle={boolean('subtitle', false)}
      body={boolean('body', true)}
      caption={boolean('caption', false)}
      level={number('level', 1)}
      color={color('color', THEME.COLOR.TEXT)}
      lighten={boolean('lighten', false)}
    >
      {text('content', LIPSUM)}
    </Text>
  ));
