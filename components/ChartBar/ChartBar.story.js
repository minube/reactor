import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, object, select } from '@storybook/addon-knobs/react';

import ChartBar from './ChartBar';
import MOCKS from './ChartBar.mocks';

const DEFAULT = { captions: MOCKS.CAPTIONS, values: MOCKS.VALUES };

console.log('>>>', MOCKS.SCALES)

storiesOf('✅ ChartBar', module)
  .add('default', () => (
    <ChartBar />
  ))
  .add('values', () => (
    <ChartBar values={MOCKS.VALUES} />
  ))
  .add('color', () => (
    <ChartBar color={MOCKS.COLOR} values={MOCKS.VALUES} />
  ))
  .add('captions', () => (
    <ChartBar {...DEFAULT} />
  ))
  .add('scales', () => (
    <ChartBar scales={MOCKS.SCALES} {...DEFAULT} />
  ))
  .add('inverted', () => (
    <ChartBar inverted {...DEFAULT} />
  ))
  .add('highlight', () => (
    <ChartBar highlight={MOCKS.HIGHLIGHT} {...DEFAULT} />
  ))
  .add('style', () => (
    <ChartBar style={MOCKS.STYLE} {...DEFAULT} />
  ))
  .add('styleContainer', () => (
    <ChartBar styleContainer={MOCKS.STYLE_CONTAINER} scales={MOCKS.SCALES} {...DEFAULT} />
  ))
  .add('styleBar', () => (
    <ChartBar styleBar={MOCKS.STYLE_BAR} styleContainer={MOCKS.STYLE_CONTAINER} scales={MOCKS.SCALES} {...DEFAULT} />
  ))
  .add('🏀 Playground', () => (
    <ChartBar
      color={color('color', MOCKS.COLOR)}
      values={object('values', MOCKS.VALUES)}
      captions={object('captions', MOCKS.CAPTIONS)}
      scales={object('scales', MOCKS.SCALES)}
      inverted={boolean('inverted', MOCKS.INVERTED)}

      styleBar={object('styleBar', MOCKS.STYLE_BAR)}
      styleContainer={object('styleContainer', MOCKS.STYLE_CONTAINER)}
    />
  ));
