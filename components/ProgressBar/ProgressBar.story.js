import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module)
  .addWithJSX('default', () => (
    <ProgressBar />
  ))
  .addWithJSX('with progress', () => (
    <ProgressBar progress={0.33} />
  ))
  .addWithJSX('with indeterminate', () => (
    <ProgressBar indeterminate />
  ))
  .addWithJSX('with color', () => (
    <ProgressBar progress={0.5} color={THEME.COLOR.ACCENT} />
  ))
  .addWithJSX('with trackColor', () => (
    <ProgressBar progress={0.5} trackColor={THEME.COLOR.BORDER} />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <ProgressBar progress={0.5} style={{ borderRadius: THEME.OFFSET / 2, height: THEME.OFFSET }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ProgressBar
      progress={number('progress', 0.5)}
      indeterminate={boolean('indeterminate', false)}
      color={color('color', THEME.COLOR.ACCENT)}
      trackColor={color('trackColor', THEME.COLOR.BACKGROUND)}
    />
  ));
