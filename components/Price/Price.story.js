import React, { Fragment } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Price from './Price';

storiesOf('✅ Price', module)
  .addWithJSX('default', () => (
    <Price />
  ))
  .addWithJSX('caption', () => (
    <Price caption="From" />
  ))
  .addWithJSX('value', () => (
    <Price value={19.95} />
  ))
  .addWithJSX('fixed', () => (
    <Price fixed={2} value={19.1234} />
  ))
  .addWithJSX('symbol (left)', () => (
    <Price value={4} symbol="$" />
  ))
  .addWithJSX('symbol (right)', () => (
    <Price value={4} symbol="eur" />
  ))
  .addWithJSX('fontSize auto-adjust', () => (
    <View>
      <Price value={32} symbol="$" />
      <Price value={1024} symbol="$" />
    </View>
  ))
  .addWithJSX('inherit <Text> properties', () => (
    <Price title primary />
  ))
  .addWithJSX('style', () => (
    <Price style={{ fontWeight: 'bold', fontSize: THEME.FONT.SIZE.SMALL, color: THEME.COLOR.ACCENT }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Price
      caption={text('caption', 'from')}
      fixed={number('fixed', 2)}
      value={number('value', 64)}
      symbol={text('symbol', '€')}
    />
  ));

