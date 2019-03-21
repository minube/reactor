import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, text } from '@storybook/addon-knobs/react';

import Loader from './Loader';

const LOREM = 'Lorem';

storiesOf('🛠 Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('color', () => (
    <Loader color="pink" />
  ))
  .add('text', () => (
    <Loader text="Loading" />
  ))
  .add('large', () => (
    <Loader large />
  ))
  .add('🏀 Playground', () => (
    <Loader
      color={color('color', 'grey')}
      small={boolean('small', false)}
      large={boolean('large', false)}
      text={text('content', LOREM)}
    />
  ));
