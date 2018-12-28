import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, color, object, text } from '@storybook/addon-knobs/react';

import Snackbar from './Snackbar';

const LOREM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.";
const PROPS = { visible: true };

storiesOf('✅ Snackbar', module)
  .add('default', () => (
    <Snackbar {...PROPS} />
  ))
  .add('caption', () => (
    <Snackbar {...PROPS} caption={LOREM} />
  ))
  .add('button', () => (
    <Snackbar {...PROPS} caption={LOREM} button="Close" />
  ))
  .add('visible (false)', () => (
    <Snackbar visible={false} caption={LOREM} />
  ))
  .add('inherit button color', () => (
    <Snackbar {...PROPS} color="red" button="Close" />
  ))
  .add('⚡ onPress', () => (
    <Snackbar {...PROPS} caption={LOREM} button="Close" onPress={action('Snackbar.onPress()')} />
  ))
  .add('🏀 Playground', () => (
    <Snackbar
      caption={text('caption', LOREM)}
      button={text('button', 'Close')}
      onPress={action('Snackbar.onPress()')}
      visible={boolean('visible', true)}
    />
  ));
