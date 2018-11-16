import React, { Fragment } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs/react';

import Price from './Price';

const STYLE = { fontWeight: 800, fontSize: 32, color: 'green' }

storiesOf('✅ Price', module)
  .add('default', () => (
    <Price />
  ))
  .add('caption', () => (
    <Price caption="From" />
  ))
  .add('value', () => (
    <Price value={19.95} />
  ))
  .add('fixed', () => (
    <Price fixed={2} value={19.1234} />
  ))
  .add('symbol (left)', () => (
    <Price value={4} symbol="$" />
  ))
  .add('symbol (right)', () => (
    <Price value={4} symbol="eur" />
  ))
  .add('inject <Text> properties', () => (
    <Price headline={false} subtitle level={2} />
  ))
  .add('style', () => (
    <Price style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Price
      caption={text('caption', 'from')}
      fixed={number('fixed', 2)}
      value={number('value', 64)}
      symbol={text('symbol', '€')}
      style={object('style', STYLE)}
    />
  ));

