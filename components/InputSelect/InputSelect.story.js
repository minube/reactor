import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import InputSelect from './InputSelect';

const DATASOURCE = [
  { title: 'one', caption: 'Example of caption' },
  { title: 'two', caption: 'Example of caption' },
  { title: 'three', caption: 'Example of caption' },
  { title: 'four', caption: 'Example of caption' },
  { title: 'five', caption: 'Example of caption' },
  { title: 'six', caption: 'Example of caption' },
  { title: 'seven', caption: 'Example of caption' },
  { title: 'height', caption: 'Example of caption' },
  { title: 'nine', caption: 'Example of caption' },
  { title: 'ten', caption: 'Example of caption' },
];
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 };
const LABEL = 'Username';
const HINT = 'Optional field';

storiesOf('✅ InputSelect', module)
  .add('default', () => (
    <InputSelect />
  ))
  .add('datasource', () => (
    <InputSelect datasource dataSource={DATASOURCE} />
  ))
  .add('disabled', () => (
    <InputSelect disabled dataSource={DATASOURCE} />
  ))
  .add('error', () => (
    <InputSelect error="Required field" dataSource={DATASOURCE} />
  ))
  .add('hint', () => (
    <InputSelect hint={HINT} dataSource={DATASOURCE} />
  ))
  .add('label', () => (
    <InputSelect label={LABEL} dataSource={DATASOURCE} />
  ))
  .add('value', () => (
    <InputSelect value="three" dataSource={DATASOURCE} />
  ))
  .add('⚡ onChange', () => (
    <InputSelect onChange={action('InputSelect.onChange()')} title="Press me" dataSource={DATASOURCE} />
  ))
  .add('style', () => (
    <InputSelect style={STYLE} dataSource={DATASOURCE} />
  ))
  .add('🏀 Playground', () => (
    <InputSelect
      dataSource={object('dataSource', DATASOURCE)}
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', HINT)}
      label={text('label', LABEL)}
      value={text('value', null)}
      style={object('style', STYLE)}
    />
  ))

