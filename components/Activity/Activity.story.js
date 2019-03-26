import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  color, object, select,
} from '@storybook/addon-knobs/react';

import Activity from './Activity';

const STYLE = {
  padding: 10,
  backgroundColor: 'rgba(0,255,0,0.25)',
};

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
  .add('style', () => (
    <Activity style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Activity
      color={color('color', 'green')}
      size={select('size', ['small', 'large'], 'small')}
      style={object('style', STYLE)}
    />
  ));
