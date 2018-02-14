import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';

import { THEME } from '../../common';
import Price from './Price';

storiesOf('✅ Price', module)
  .addWithJSX('default', () => (
    <Price />
  ))
  .addWithJSX('with value', () => (
    <Price value={19.95} />
  ))
  .addWithJSX('with fixed value', () => (
    <Price fixed={2} value={19.1234} />
  ))
  .addWithJSX('with symbol (left)', () => (
    <Price value={4} symbol="$" />
  ))
  .addWithJSX('with symbol (right)', () => (
    <Price value={4} symbol="eur" />
  ))
  .addWithJSX('Adjust the fontSize', () => (
    <WithNotes>
      <Price value={32} symbol="eur" />
      <Price value={1024} symbol="eur" />
    </WithNotes>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Price style={{ fontSize: THEME.FONT.SIZE.SMALL, color: 'orange' }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Price
      fixed={number('fixed', 2)}
      value={number('value', 64)}
      symbol={text('symbol', '$')}
    />
  ));

