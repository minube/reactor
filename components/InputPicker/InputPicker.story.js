import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs/react';

import InputPicker from './InputPicker';

const DATASOURCE = ['one', 'two', 'three', 'four', 'five'];

storiesOf('🛠 InputPicker', module)
  .addWithJSX('default', () => (
    <InputPicker />
  ))
  .addWithJSX('datasource', () => (
    <InputPicker datasource dataSource={DATASOURCE} />
  ))
  .addWithJSX('disabled', () => (
    <InputPicker disabled dataSource={DATASOURCE} />
  ))
  .addWithJSX('error', () => (
    <InputPicker error="Required field" dataSource={DATASOURCE} />
  ))
  .addWithJSX('hint', () => (
    <InputPicker hint="Optional field" dataSource={DATASOURCE} />
  ))
  .addWithJSX('label', () => (
    <InputPicker label="Username" dataSource={DATASOURCE} />
  ))
  .addWithJSX('value', () => (
    <InputPicker value="three" dataSource={DATASOURCE} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <InputPicker onChange={action('InputPicker.onChange()')} title="Press me" dataSource={DATASOURCE} />
  ))
  .addWithJSX('style', () => (
    <InputPicker style={{ backgroundColor: 'orange', padding: 10, width: 256 }} dataSource={DATASOURCE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <InputPicker
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', null)}
    />
  ))

