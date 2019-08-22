import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, color, object,
} from '@storybook/addon-knobs/react';
import InputSearcher from './InputSearcher';

const DATA = [
  {name: 'Madrid', id: 23},
  {name: 'Madrid Snowzone', id: 12},
  {name: 'Comunidad Madrid', id: 65},
  {name: 'San Lorenzo del escorial', id: 76},
  {name: 'Alcalá de Henares', id: 132},
  {name: 'Aranjuez', id: 73},
];

const STYLE = { padding: 10, width: 256 };

_onChange = () => DATA;

storiesOf('✅ InputSearcher', module)
  .add('default', () => (
    <InputSearcher />
  ))
  .add('color', () => (
    <InputSearcher color="green" />
  ))
  .add('disabled', () => (
    <InputSearcher disabled />
  ))
  .add('hint', () => (
    <InputSearcher hint="Optional field" />
  ))
  .add('label', () => (
    <InputSearcher label="InputSearcher" />
  ))
  .add('value', () => (
    <InputSearcher value="Madrid" />
  ))
  .add('onChange', () => (
    <InputSearcher onChange={_onChange} />
  ))
  .add('🏀 Playground', () => (
    <InputSearcher
      color={color('color', undefined)}
      hint={text('hint', 'This is a hint')}
      disabled={boolean('disabled', false)}
      label={text('label', 'This is a label')}
      value={text('value', 'Madrid')}
      onChange={action('InputSearcher.onChange()')}
      style={object('style', STYLE)}
    />
  ));
