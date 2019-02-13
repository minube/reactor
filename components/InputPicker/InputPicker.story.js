import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import InputPicker from './InputPicker';

const DATASOURCE = ['one', 'two', 'three', 'four', 'five'];
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 };

storiesOf('✅ InputPicker', module)
  .add('default', () => (
    <InputPicker />
  ))
  .add('datasource', () => (
    <InputPicker datasource dataSource={DATASOURCE} />
  ))
  .add('disabled', () => (
    <InputPicker disabled dataSource={DATASOURCE} />
  ))
  .add('error', () => (
    <InputPicker error="Required field" dataSource={DATASOURCE} />
  ))
  .add('hint', () => (
    <InputPicker hint="Optional field" dataSource={DATASOURCE} />
  ))
  .add('label', () => (
    <InputPicker label="Username" dataSource={DATASOURCE} />
  ))
  .add('value', () => (
    <InputPicker value="three" dataSource={DATASOURCE} />
  ))
  .add('⚡ onChange', () => (
    <InputPicker onChange={action('InputPicker.onChange()')} title="Press me" dataSource={DATASOURCE} />
  ))
  .add('style', () => (
    <InputPicker style={STYLE} dataSource={DATASOURCE} />
  ))
  .add('🏀 Playground', () => (
    <InputPicker
      dataSource={object('dataSource', DATASOURCE)}
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', null)}
      value={text('value', null)}
      style={object('style', STYLE)}
    />
  ))

