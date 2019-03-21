import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, select } from '@storybook/addon-knobs/react';

import Loader from './Loader';

storiesOf('✅ Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('text', () => (
    <Loader text="Loading" />
  ))
  .add('🏀 Playground', () => (
    <Loader
      animating={boolean('animating', true)}
      color={color('color', 'green')}
      hidesWhenStopped={boolean('hidesWhenStopped', false)}
      size={select('size', ['small', 'large'], 'small')}
    />
  ));
