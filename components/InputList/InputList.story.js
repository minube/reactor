import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { array, text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import InputList from './InputList';

const VALUE = ['one', 'two', 'three', 'four', 'five'];
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

storiesOf('🛠 InputList', module)
  .addWithJSX('default', () => (
    <InputList />
  ))
  .addWithJSX('disabled', () => (
    <InputList disabled />
  ))
  .addWithJSX('error', () => (
    <InputList error="Required field" />
  ))
  .addWithJSX('hint', () => (
    <InputList hint="Optional field" />
  ))
  .addWithJSX('label', () => (
    <InputList label="Username" />
  ))
  .addWithJSX('value', () => (
    <InputList value="three" value={VALUE} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <InputList onChange={action('InputList.onChange()')} title="Press me" value={VALUE} />
  ))
  .addWithJSX('style', () => (
    <InputList style={STYLE} value={VALUE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <InputList
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', null)}
      value={array('value', VALUE)}
      style={object('style', STYLE)}
    />
  ))

