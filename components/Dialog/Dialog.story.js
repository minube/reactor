import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs/react';

import Dialog from './Dialog';
import MOCKS from './Dialog.mocks';

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
    <Dialog title={MOCKS.TITLE} visible />
  ))
  .add('highlight', () => (
    <Dialog highlight title={MOCKS.TITLE} visible style={MOCKS.STYLE} />
  ))
  .add('children', () => (
    <Dialog title={MOCKS.TITLE} visible>{MOCKS.CHILDREN}</Dialog>
  ))
  .add('reverse', () => (
    <Dialog reverse visible />
  ))
  .add('⚡ onClose', () => (
    <Dialog title={MOCKS.TITLE} onClose={action('Dialog.onClose()')} visible />
  ))
  .add('⚡ onClose + highlight', () => (
    <Dialog title={MOCKS.TITLE} highlight onClose={action('Dialog.onClose()')} visible style={MOCKS.STYLE} />
  ))
  .add('style', () => (
    <Dialog title={MOCKS.TITLE} style={MOCKS.STYLE} visible />
  ))
  .add('styleContainer', () => (
    <Dialog title={MOCKS.TITLE} styleContainer={MOCKS.STYLE_CONTAINER} visible />
  ))
  .add('🏀 Playground', () => (
    <Dialog
      background={boolean('background', true)}
      highlight={boolean('highlight', true)}
      reverse={boolean('reverse', false)}
      onClose={action('Dialog.onClose()')}
      onSubmit={action('Dialog.onSubmit()')}
      title={text('title', MOCKS.TITLE)}
      visible={boolean('visible', true)}
      style={object('style', MOCKS.STYLE)}
      styleContainer={object('styleContainer', MOCKS.STYLE_CONTAINER)}
    >
      {MOCKS.CHILDREN}
    </Dialog>
  ));
