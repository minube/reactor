import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text, color, boolean, number,
} from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Text from './Text';

const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const style = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  padding: 10,
};

storiesOf('✅ Text', module)
  .add('default', () => (
    <Text>{LIPSUM}</Text>
  ))
  .add('headline (0)', () => (
    <Text headline level={0}>{LOREM}</Text>
  ))
  .add('headline (1)', () => (
    <Text headline level={1}>{LOREM}</Text>
  ))
  .add('headline (2)', () => (
    <Text headline level={2}>{LOREM}</Text>
  ))
  .add('headline (3)', () => (
    <Text headline level={3}>{LOREM}</Text>
  ))
  .add('headline (4)', () => (
    <Text headline level={4}>{LOREM}</Text>
  ))
  .add('headline (5)', () => (
    <Text headline level={5}>{LOREM}</Text>
  ))
  .add('headline (6)', () => (
    <Text headline level={6}>{LOREM}</Text>
  ))
  .add('subtitle (1)', () => (
    <Text subtitle level={1}>{LIPSUM}</Text>
  ))
  .add('subtitle (2)', () => (
    <Text subtitle level={2}>{LIPSUM}</Text>
  ))
  .add('subtitle (3)', () => (
    <Text subtitle level={3}>{LIPSUM}</Text>
  ))
  .add('body (1)', () => (
    <Text body level={1}>{LIPSUM}</Text>
  ))
  .add('body (2)', () => (
    <Text body level={2}>{LIPSUM}</Text>
  ))
  .add('body (3)', () => (
    <Text body level={3}>{LIPSUM}</Text>
  ))
  .add('caption (1)', () => (
    <Text body caption level={1}>{LIPSUM}</Text>
  ))
  .add('caption (2)', () => (
    <Text body caption level={2}>{LIPSUM}</Text>
  ))
  .add('lighten', () => (
    <Text lighten>{LIPSUM}</Text>
  ))
  .add('color', () => (
    <Text color={THEME.COLOR.ERROR}>{LIPSUM}</Text>
  ))
  .add('numberOfLines', () => (
    <Text numberOfLines={1}>{LIPSUM}</Text>
  ))
  .add('style', () => (
    <Text style={style}>Customized Text</Text>
  ))
  .add('🏀 Playground', () => (
    <Text
      headline={boolean('headline', false)}
      subtitle={boolean('subtitle', false)}
      body={boolean('body', true)}
      caption={boolean('caption', false)}
      level={number('level', 1)}
      lighten={boolean('lighten', false)}
      color={color('color', THEME.COLOR.TEXT)}
      numberOfLines={number('numberOfLines', 1)}
    >
      {text('content', LOREM)}
    </Text>
  ));
