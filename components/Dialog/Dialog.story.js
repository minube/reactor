import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs/react';

import LayoutView from '../Layout';
import Dialog from './Dialog';
import Text from '../Text';

const STYLE = { backgroundColor: 'blue' };
const STYLE_CONTAINER = { backgroundColor: 'orange', width: '100%', height: 320 };

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
    <Dialog title="Hello world" style={STYLE} visible />
  ))
  .addWithJSX('styleContainer', () => (
    <Dialog title="Hello world" styleContainer={STYLE_CONTAINER} visible />
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Dialog
        background={boolean('background', true)}
        onClose={action('Dialog.onClose()')}
        onSubmit={action('Dialog.onSubmit()')}
        style={object('style', STYLE, 'dialog-style')}
        styleContainer={object('styleContainer', STYLE_CONTAINER, 'dialog-styleContainer')}
        title={text('title', 'Title')}
        visible={boolean('visible', true)}
      >
        <Text>Example of children</Text>
      </Dialog>
    </LayoutView>
  ));
