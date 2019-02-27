import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  color, text, boolean, object,
} from '@storybook/addon-knobs/react';

import Switch from './Switch';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

storiesOf('✅ Switch', module)
  .add('default', () => (
    <Switch />
  ))
  .add('color', () => (
    <Switch color="green" />
  ))
  .add('label', () => (
    <Switch label="Example of label" />
  ))
  .add('disabled', () => (
    <Switch disabled label="Example of label" />
  ))
  .add('value', () => (
    <Switch value label="Example of label" />
  ))
  .add('⚡ onChange', () => (
    <Switch onChange={action('Switch.onChange()')} value />
  ))
  .add('style', () => (
    <Switch style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Switch
      color={color('color', undefined)}
      disabled={boolean('disabled', false)}
      label={text('label', 'Example of label')}
      value={boolean('value', true)}
      onValueChange={action('Switch.onValueChange()')}
      style={object('style', STYLE)}
    />
  ));
