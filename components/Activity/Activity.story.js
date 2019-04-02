import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, object, select } from '@storybook/addon-knobs/react';

import Activity from './Activity';
import MOCKS from './Activity.mocks';

storiesOf('✅ Activity', module)
  .add('default', () => (
    <Activity />
  ))
  .add('color', () => (
    <Activity color={MOCKS.COLOR} />
  ))
  .add('size', () => (
    <Activity size={MOCKS.SIZE} />
  ))
  .add('style', () => (
    <Activity style={MOCKS.STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Activity
      color={color('color', MOCKS.COLOR)}
      size={select('size', ['small', 'large'], MOCKS.SIZE)}
      style={object('style', MOCKS.STYLE)}
    />
  ));
