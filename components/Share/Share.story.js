import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, color, object, text } from '@storybook/addon-knobs/react';

import Share from './Share';

const LOREM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.";
const STYLE = { borderRadius: 5, width: 128, height: 128 };

storiesOf('✅ Share', module)
  .add('default', () => (
    <Share />
  ))
  .add('title', () => (
    <Share title="Hello" />
  ))
  .add('caption', () => (
    <Share caption={LOREM} />
  ))
  .add('optionColor', () => (
    <Share optionColor="red" />
  ))
  .add('derive button', () => (
    <Share color="red" />
  ))
  .add('⚡ onCancel (only web)', () => (
    <Share onCancel={action('Share.onCancel()')} />
  ))
  .add('⚡ onOption (only web)', () => (
    <Share onOption={action('Share.onOption()')} />
  ))
  .add('⚡ onPress', () => (
    <Share onPress={action('Share.onPress()')} />
  ))
  .add('🏀 Playground', () => (
    <Share
      title={text('title', 'hello')}
      caption={text('caption', LOREM)}
      color={color('color', LOREM)}
      onCancel={action('Share.onCancel()')}
      onOption={action('Share.onOption()')}
      onPress={action('Share.onPress()')}
    />
  ));
