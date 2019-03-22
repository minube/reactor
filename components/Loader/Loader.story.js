import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, text } from '@storybook/addon-knobs/react';

import Loader from './Loader';

const LOADING = 'Loading';
const COLOR = 'grey'

storiesOf('🛠 Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('color', () => (
    <Loader color={COLOR} />
  ))
  .add('text', () => (
    <Loader text={LOADING} />
  ))
  .add('large', () => (
    <Loader large />
  ))
  .add('🏀 Playground', () => (
    <Loader
      color={color('color', COLOR)}
      large={boolean('large', false)}
      text={text('content', LOADING)}
    />
  ));
