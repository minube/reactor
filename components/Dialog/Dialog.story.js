import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import Dialog from './Dialog';
import Text from '../Text';

storiesOf('🛠 Dialog', module)
  .addWithJSX('default', () => (
    <Dialog onClose={action('Dialog.onClose()')} title="Title" visible />
  ))
  .addWithJSX('⚡ onSubmit', () => (
    <Dialog onSubmit={action('Dialog.onSubmit()')} title="Title" visible />
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
