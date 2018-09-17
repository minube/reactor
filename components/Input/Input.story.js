import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, object, number, select } from '@storybook/addon-knobs/react';

import Input from './Input';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 };

storiesOf('☑️ Input', module)
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
  .addWithJSX('value', () => (
    <Input value="soyjavi.com" />
  ))
  .addWithJSX('⚡ onBlur', () => (
    <Input onBlur={action('Input.onBlur()')} title="Press me" />
  ))
  .addWithJSX('⚡ onChange', () => (
    <Input onChange={action('Input.onChange()')} title="Press me" />
  ))
  .addWithJSX('⚡ onFocus', () => (
    <Input onFocus={action('Input.onFocus()')} title="Press me" />
  ))
  .addWithJSX('style', () => (
    <Input style={STYLE} />
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
      value={text('value', null)}
      style={object('style', STYLE)}
    />
  ))

