import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, select } from '@storybook/addon-knobs/react';

import Activity from './Activity';

storiesOf('✅ Activity', module)
  .add('default', () => (
    <Activity />
  ))
  .add('color', () => (
    <Activity color="green" />
  ))
  .add('size', () => (
    <Activity size="large" />
  ))
  .add('🏀 Playground', () => (
    <Activity
      animating={boolean('animating', true)}
      color={color('color', 'green')}
      hidesWhenStopped={boolean('hidesWhenStopped', false)}
      size={select('size', ['small', 'large'], 'small')}
    />
  ));
