import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs/react';

import Dialog from './Dialog';
import Text from '../Text';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)' };
const STYLE_CONTAINER = { backgroundColor: 'rgba(0,255,0,0.25)', height: '50%' };

storiesOf('✅ Dialog', module)
  .addWithJSX('default', () => (
    <Dialog  />
  ))
  .addWithJSX('visible', () => (
    <Dialog visible />
  ))
  .addWithJSX('background (disabled)', () => (
    <Dialog background={false} visible />
  ))
  .addWithJSX('title', () => (
    <Dialog title="Hello world" visible />
  ))
  .addWithJSX('highlight', () => (
    <Dialog highlight title="Hello world" visible style={STYLE} />
  ))
  .addWithJSX('children', () => (
    <Dialog title="Hello world" visible>
      <Text>lorem ipsum...</Text>
    </Dialog>
  ))
  .addWithJSX('⚡ onClose', () => (
    <Dialog title="Hello world" onClose={action('Dialog.onClose()')} visible />
  ))
  .addWithJSX('⚡ onClose + highlight', () => (
    <Dialog title="Hello world" highlight onClose={action('Dialog.onClose()')} visible style={STYLE} />
  ))
  .addWithJSX('style', () => (
    <Dialog title="Hello world" style={STYLE} visible />
  ))
  .addWithJSX('styleContainer', () => (
    <Dialog title="Hello world" styleContainer={STYLE_CONTAINER} visible />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Dialog
      background={boolean('background', true)}
      highlight={boolean('highlight', true)}
      onClose={action('Dialog.onClose()')}
      onSubmit={action('Dialog.onSubmit()')}
      style={object('style', STYLE, 'dialog-style')}
      styleContainer={object('styleContainer', STYLE_CONTAINER, 'dialog-styleContainer')}
      title={text('title', 'Title')}
      visible={boolean('visible', true)}
      style={object('style', STYLE)}
      styleContainer={object('styleContainer', STYLE_CONTAINER)}
    >
      <Text>Example of children</Text>
    </Dialog>
  ));
