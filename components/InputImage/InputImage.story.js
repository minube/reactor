import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { array, text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import InputImage from './InputImage';

const VALUE = 'http://soyjavi.com/assets/images/soyjavi.jpg';
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 512 };

storiesOf('☑️ InputImage', module)
  .addWithJSX('default', () => (
    <InputImage />
  ))
  .addWithJSX('disabled', () => (
    <InputImage disabled />
  ))
  .addWithJSX('error', () => (
    <InputImage error="Required field" />
  ))
  .addWithJSX('hint', () => (
    <InputImage hint="Optional field" />
  ))
  .addWithJSX('label', () => (
    <InputImage label="Username" />
  ))
  .addWithJSX('value', () => (
    <InputImage value="three" value={VALUE} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <InputImage onChange={action('InputImage.onChange()')} title="Press me" value={VALUE} />
  ))
  .addWithJSX('style', () => (
    <InputImage style={STYLE} value={VALUE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <InputImage
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', null)}
      value={text('value', VALUE)}
      style={object('style', STYLE)}
    />
  ))

