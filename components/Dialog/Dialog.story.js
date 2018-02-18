import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import Dialog from './Dialog';
import Text from '../Text';

storiesOf('🛠 Dialog', module)
  .addWithJSX('default', () => (
    <Dialog onClose={action('Button.onClose()')} title="Title" visible />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Dialog
      title={text('title', 'Title')}
      onClose={action('Dialog.onClose()')}
      onSubmit={boolean('onSubmit', true)}
      visible={boolean('visible', true)}
    >
      <Text>Example of children</Text>
    </Dialog>
  ));
