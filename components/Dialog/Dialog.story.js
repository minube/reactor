import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import Dialog from './Dialog';
import Text from '../Text';

storiesOf('🛠 Dialog', module)
  .addWithJSX('default', () => (
    <Dialog onClose={action('Dialog.onClose()')} visible />
  ))
  .addWithJSX('title', () => (
    <Dialog title="Hello world" visible />
  ))
  .addWithJSX('⚡ onClose', () => (
    <Dialog onClose={action('Dialog.onClose()')} visible />
  ))
  .addWithJSX('⚡ onSubmit', () => (
    <Dialog onSubmit={action('Dialog.onSubmit()')} visible />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Dialog
        title={text('title', 'Title')}
        onClose={action('Dialog.onClose()')}
        onSubmit={action('Dialog.onSubmit()')}
        visible={boolean('visible', true)}
      >
        <Text>Example of children</Text>
      </Dialog>
    </ResponsiveView>
  ));
