import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs/react';

import Input from './Input';

storiesOf('🛠 Input', module)
  .addWithJSX('default', () => (
    <Input />
  ))
  .addWithJSX('disabled', () => (
    <Input disabled />
  ))
  .addWithJSX('error', () => (
    <Input error="Required field" />
  ))
  .addWithJSX('hint', () => (
    <Input hint="Optional field" />
  ))
  .addWithJSX('keyboard (numeric)', () => (
    <Input keyboard="numeric" />
  ))
  .addWithJSX('label', () => (
    <Input label="Username" />
  ))
  .addWithJSX('lines', () => (
    <Input lines={5} />
  ))
  .addWithJSX('⚡ onBlur', () => (
    <Input onBlur={action('Input.onBlur()')} title="Press me" />
  ))
  .addWithJSX('⚡ onFocus', () => (
    <Input onFocus={action('Input.onFocus()')} title="Press me" />
  ))
  .addWithJSX('style', () => (
    <Input style={{ backgroundColor: 'orange' }} />
  ))
  .addWithJSX('...inherit', () => (
    <Input placeholder="placeholder..." />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Input
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      keyboard={select('type', ['default', 'numeric', 'email-address', 'phone-pad'], 'default')}
      label={text('label', null)}
      lines={number('lines', 1)}
    />
  ))

