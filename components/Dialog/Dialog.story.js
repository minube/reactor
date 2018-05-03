import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import LayoutView from '../Layout';
import Dialog from './Dialog';
import Text from '../Text';

storiesOf('🛠 Dialog', module)
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
  .addWithJSX('⚡ onClose', () => (
    <Dialog title="Hello world" onClose={action('Dialog.onClose()')} visible />
  ))
  .addWithJSX('⚡ onSubmit', () => (
    <Dialog title="Hello world" onSubmit={action('Dialog.onSubmit()')} visible />
  ))
  .addWithJSX('style', () => (
    <Dialog title="Hello world" style={{ backgroundColor: 'orange', width: 512, height: 320 }} visible />
  ))
  .addWithJSX('styleContainer', () => (
    <Dialog
      title="Hello world"
      styleContainer={{ padding: 32, alignItems: 'flex-start', justifyContent: 'flex-end' }}
      visible
    />
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Dialog
        background={boolean('background', true)}
        title={text('title', 'Title')}
        onClose={action('Dialog.onClose()')}
        onSubmit={action('Dialog.onSubmit()')}
        visible={boolean('visible', true)}
      >
        <Text>Example of children</Text>
      </Dialog>
    </LayoutView>
  ));
