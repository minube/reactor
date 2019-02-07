import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { array, text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import InputImage from './InputImage';

const VALUE = 'http://soyjavi.com/assets/images/soyjavi.jpg';
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 512 };

storiesOf('✅ InputImage', module)
  .add('default', () => (
    <InputImage />
  ))
  .add('disabled', () => (
    <InputImage disabled />
  ))
  .add('error', () => (
    <InputImage error="Required field" />
  ))
  .add('hint', () => (
    <InputImage hint="Optional field" />
  ))
  .add('label', () => (
    <InputImage label="Username" />
  ))
  .add('value', () => (
    <InputImage value="three" value={VALUE} />
  ))
  .add('required', () => (
    <InputImage required />
  ))
  .add('⚡ onChange', () => (
    <InputImage onChange={action('InputImage.onChange()')} title="Press me" value={VALUE} />
  ))
  .add('style', () => (
    <InputImage style={STYLE} value={VALUE} />
  ))
  .add('🏀 Playground', () => (
    <InputImage
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', null)}
      required={boolean('required', false)}
      value={text('value', VALUE)}
      style={object('style', STYLE)}
    />
  ))

