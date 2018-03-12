import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ResponsiveView from '../ResponsiveView';
import ProgressBar from './ProgressBar';

storiesOf('✅ ProgressBar', module)
  .addWithJSX('default', () => (
    <ProgressBar />
  ))
  .addWithJSX('progress', () => (
    <ProgressBar progress={0.33} />
  ))
  .addWithJSX('color', () => (
    <ProgressBar progress={0.5} color={THEME.COLOR.ACCENT} />
  ))
  .addWithJSX('trackColor', () => (
    <ProgressBar progress={0.5} trackColor={THEME.COLOR.ERROR} />
  ))
  .addWithJSX('style', () => (
    <ProgressBar progress={0.5} style={{ borderRadius: THEME.OFFSET / 2, height: THEME.OFFSET }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView style={{ width: '100%' }}>
      <ProgressBar
        progress={number('progress', 0.5)}
        indeterminate={boolean('indeterminate', false)}
        color={color('color', THEME.COLOR.ACCENT)}
        trackColor={color('trackColor', THEME.COLOR.BACKGROUND)}
      />
    </ResponsiveView>
  ));
