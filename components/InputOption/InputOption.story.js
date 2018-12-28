import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, text } from '@storybook/addon-knobs/react';

import InputOption from './InputOption';

const style = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  padding: 10,
};

const LABEL = 'Lorem Ipsum...';

storiesOf('InputOption', module)
  .add('default', () => (
    <InputOption />
  ))
  .add('label', () => (
    <InputOption label={LABEL} />
  ))
  .add('selected', () => (
    <InputOption selected />
  ))
  .add('rounded (false)', () => (
    <InputOption rounded={false} />
  ))
  .add('inherit:style', () => (
    <InputOption style={style} />
  ))
  .add('⚡ onChange', () => (
    <InputOption onChange={action('InputOption.onChange()')} />
  ))
  .add('🏀 Playground', () => (
    <InputOption
      label={text('label', LABEL)}
      selected={boolean('selected', true)}
      rounded={boolean('rounded', true)}
      onChange={action('InputOption.onChange()')}
      style={object('style', style)}
    />
  ));
