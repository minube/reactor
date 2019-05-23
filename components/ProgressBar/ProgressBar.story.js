import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ProgressBar from './ProgressBar';

const { SPACE } = THEME;

storiesOf('✅ ProgressBar', module)
  .add('default', () => (
    <ProgressBar />
  ))
  .add('progress', () => (
    <ProgressBar progress={0.33} />
  ))
  .add('color', () => (
    <ProgressBar progress={0.5} color={THEME.COLOR.ALTERNATIVE} />
  ))
  .add('trackColor', () => (
    <ProgressBar progress={0.5} trackColor={THEME.COLOR.ERROR} />
  ))
  .add('style', () => (
    <ProgressBar progress={0.5} style={{ borderRadius: SPACE.XS, height: SPACE.MEDIUM }} />
  ))
  .add('🏀 Playground', () => (
    <ProgressBar
      progress={number('progress', 0.5)}
      indeterminate={boolean('indeterminate', false)}
      color={color('color', THEME.COLOR.ALTERNATIVE)}
      trackColor={color('trackColor', THEME.COLOR.BACKGROUND)}
    />
  ));
