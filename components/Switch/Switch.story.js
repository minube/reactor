import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs/react';

import Switch from './Switch';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

storiesOf('✅ Switch', module)
  .addWithJSX('default', () => (
    <Switch />
  ))
  .addWithJSX('label', () => (
    <Switch label="Example of label" />
  ))
  .addWithJSX('disabled', () => (
    <Switch disabled label="Example of label" />
  ))
  .addWithJSX('value', () => (
    <Switch value label="Example of label" />
  ))
  .addWithJSX('⚡ onChange', () => (
    <Switch onChange={action('Switch.onChange()')} value />
  ))
  .addWithJSX('style', () => (
    <Switch style={STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Switch
      disabled={boolean('disabled', false)}
      label={text('label', 'Example of label')}
      value={boolean('value', true)}
      onValueChange={action('Switch.onValueChange()')}
      style={object('style', STYLE)}
    />
  ));

