import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  color, text, boolean, object, number, select,
} from '@storybook/addon-knobs/react';

import Input from './Input';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 };

storiesOf('✅ Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('color', () => (
    <Input color="green" />
  ))

  .add('hint', () => (
    <Input hint="Optional fieldOptional fieldOptional fieldOptional fieldOptional fieldOptional field" />
  ))
  .add('icon', () => (
    <Input icon="email" />
  ))
  .add('keyboard (numeric)', () => (
    <Input keyboard="numeric" />
  ))
  .add('label', () => (
    <Input label="Username" />
  ))
  .add('lines', () => (
    <Input lines={5} />
  ))
  .add('required', () => (
    <Input required />
  ))
  .add('value', () => (
    <Input value="soyjavi.com" />
  ))
  .add('disabled', () => (
    <Input disabled value="soyjavi.com" />
  ))
  .add('error', () => (
    <Input error="Required field" value="soyjavi.com" />
  ))
  .add('⚡ onBlur', () => (
    <Input onBlur={action('Input.onBlur()')} title="Press me" />
  ))
  .add('⚡ onChange', () => (
    <Input onChange={action('Input.onChange()')} title="Press me" />
  ))
  .add('⚡ onFocus', () => (
    <Input onFocus={action('Input.onFocus()')} title="Press me" />
  ))
  .add('style', () => (
    <Input style={STYLE} />
  ))
  .add('...inherit', () => (
    <Input placeholder="placeholder..." />
  ))
  .add('🏀 Playground', () => (
    <Input
      color={color('color', undefined)}
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      keyboard={select('type', ['default', 'numeric', 'email-address', 'phone-pad'], 'default')}
      label={text('label', null)}
      lines={number('lines', 1)}
      required={boolean('required', false)}
      value={text('value', null)}
      style={object('style', STYLE)}
    />
  ));
