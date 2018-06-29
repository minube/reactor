import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import Switch from './Switch';

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
  .addWithJSX('style', () => (
    <Switch style={{ backgroundColor: 'orange' }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Switch
      disabled={boolean('disabled', false)}
      label={text('label', 'Example of label')}
      value={boolean('value', true)}
      onValueChange={action('Switch.onValueChange()')}
    />
  ));

