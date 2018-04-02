import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
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
  .addWithJSX('⚡ onBlur', () => (
    <Input onBlur={action('Input.onBlur()')} title="Press me" />
  ))
  .addWithJSX('⚡ onFocus', () => (
    <Input onFocus={action('Input.onFocus()')} title="Press me" />
  ))
  .addWithJSX('style', () => (
    <Input style={{ backgroundColor: 'orange' }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Input
        disabled={boolean('disabled', false)}
        error={text('error', null)}
        hint={text('hint', null)}
        label={text('label', null)}
        keyboard={select('type', ['default', 'numeric', 'email-address', 'phone-pad'], 'spring')}
      />
    </ResponsiveView>
  ))

