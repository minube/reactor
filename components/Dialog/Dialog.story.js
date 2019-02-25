import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs/react';

import Dialog from './Dialog';
import Text from '../Text';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)' };
const STYLE_CONTAINER = { backgroundColor: 'rgba(0,255,0,0.25)', height: '50%' };

storiesOf('✅ Dialog', module)
  .add('default', () => (
    <Dialog />
  ))
  .add('visible', () => (
    <Dialog visible />
  ))
  .add('background (disabled)', () => (
    <Dialog background={false} visible />
  ))
  .add('title', () => (
    <Dialog title="Hello world" visible />
  ))
  .add('highlight', () => (
    <Dialog highlight title="Hello world" visible style={STYLE} />
  ))
  .add('children', () => (
    <Dialog title="Hello world" visible>
      <Text>lorem ipsum...</Text>
    </Dialog>
  ))
  .add('reverse', () => (
    <Dialog reverse visible />
  ))
  .add('⚡ onClose', () => (
    <Dialog title="Hello world" onClose={action('Dialog.onClose()')} visible />
  ))
  .add('⚡ onClose + highlight', () => (
    <Dialog title="Hello world" highlight onClose={action('Dialog.onClose()')} visible style={STYLE} />
  ))
  .add('style', () => (
    <Dialog title="Hello world" style={STYLE} visible />
  ))
  .add('styleContainer', () => (
    <Dialog title="Hello world" styleContainer={STYLE_CONTAINER} visible />
  ))
  .add('🏀 Playground', () => (
    <Dialog
      background={boolean('background', true)}
      highlight={boolean('highlight', true)}
      reverse={boolean('reverse', false)}
      onClose={action('Dialog.onClose()')}
      onSubmit={action('Dialog.onSubmit()')}
      title={text('title', 'Title')}
      visible={boolean('visible', true)}
      style={object('style', STYLE)}
      styleContainer={object('styleContainer', STYLE_CONTAINER)}
    >
      <Text>Example of children</Text>
    </Dialog>
  ));
