import React, { Fragment } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { number, text, object } from '@storybook/addon-knobs/react';

import Price from './Price';
import MOCKS from './Price.mocks';

storiesOf('✅ Price', module)
  .add('default', () => (
    <Price />
  ))
  .add('value', () => (
    <Price value={MOCKS.VALUE} />
  ))
  .add('currency', () => (
    <Price value={MOCKS.VALUE} currency={MOCKS.CURRENCY} />
  ))
  .add('locale (es-ES)', () => (
    <Price value={MOCKS.VALUE} locale={MOCKS.LOCALE} />
  ))
  .add('fixed (4)', () => (
    <Price fixed={MOCKS.FIXED} value={MOCKS.VALUE} />
  ))
  .add('fixed (0)', () => (
    <Price fixed={MOCKS.FIXED_NULL} value={MOCKS.VALUE} />
  ))
  .add('symbol (left)', () => (
    <Price value={MOCKS.VALUE} symbol={MOCKS.SYMBOL_$} />
  ))
  .add('symbol (right)', () => (
    <Price value={MOCKS.VALUE} symbol={MOCKS.SYMBOL_EUR} />
  ))
  .add('inject <Text> properties', () => (
    <Price value={MOCKS.VALUE} {...MOCKS.TEXT_PROPS} symbol={MOCKS.SYMBOL_EUR} />
  ))
  .add('style', () => (
    <Price value={MOCKS.VALUE} style={MOCKS.STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Price
      locale={text('locale', MOCKS.LOCALE)}
      currency={text('currency', MOCKS.CURRENCY)}
      fixed={number('fixed', MOCKS.FIXED)}
      value={number('value', MOCKS.VALUE)}
      symbol={text('symbol', MOCKS.SYMBOL_EUR)}
      style={object('style', MOCKS.STYLE)}
    />
  ));
