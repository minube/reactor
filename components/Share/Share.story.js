import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, color, object, text } from '@storybook/addon-knobs/react';

import Share from './Share';

const LOREM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.";
const STYLE = { borderRadius: 5, width: 128, height: 128 };

storiesOf('✅ Share', module)
  .addWithJSX('default', () => (
    <Share />
  ))
  .addWithJSX('title', () => (
    <Share title="Hello" />
  ))
  .addWithJSX('caption', () => (
    <Share caption={LOREM} />
  ))
  .addWithJSX('color', () => (
    <Share color="red" />
  ))
  .addWithJSX('⚡ onCancel (only web)', () => (
    <Share onCancel={action('Share.onCancel()')} />
  ))
  .addWithJSX('⚡ onOption (only web)', () => (
    <Share onOption={action('Share.onOption()')} />
  ))
  .addWithJSX('⚡ onPress', () => (
    <Share onPress={action('Share.onPress()')} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Share
      primary
      title={text('title', 'hello')}
      caption={text('caption', LOREM)}
      color={color('color', LOREM)}
      onCancel={action('Share.onCancel()')}
      onOption={action('Share.onOption()')}
      onPress={action('Share.onPress()')}
    />
  ));
