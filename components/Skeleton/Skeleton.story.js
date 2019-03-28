import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number, select } from '@storybook/addon-knobs/react';

import Skeleton from './Skeleton';

const STYLE = {
  height: 128,
  width: 128,
};

storiesOf('✅ Skeleton', module)
  .add('default', () => (
    <Skeleton />
  ))
  .add('opacity', () => (
    <Skeleton opacity={1} />
  ))
  .add('style', () => (
    <Skeleton style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Skeleton
      opacity={number('opacity', 0.5)}
      style={object('style', STYLE)}
    />
  ));
