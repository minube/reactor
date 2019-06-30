import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, object, select } from '@storybook/addon-knobs/react';

import ChartBar from './ChartBar';
import MOCKS from './ChartBar.mocks';

storiesOf('✅ ChartBar', module)
  .add('default', () => (
    <ChartBar />
  ))
  .add('color', () => (
    <ChartBar color={MOCKS.COLOR} />
  ))
  .add('size', () => (
    <ChartBar size={MOCKS.SIZE} />
  ))
  .add('style', () => (
    <ChartBar style={MOCKS.STYLE} />
  ))
  .add('🏀 Playground', () => (
    <ChartBar
      color={color('color', MOCKS.COLOR)}
      size={select('size', ['small', 'large'], MOCKS.SIZE)}
      style={object('style', MOCKS.STYLE)}
    />
  ));
