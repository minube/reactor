import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';

import { THEME } from '../../common';
import ResponsiveView from '../ResponsiveView';
import Price from './Price';

storiesOf('✅ Price', module)
  .addWithJSX('default', () => (
    <Price />
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
    <WithNotes>
      <Price value={32} symbol="$" />
      <Price value={1024} symbol="$" />
    </WithNotes>
  ))
  .addWithJSX('style', () => (
    <Price style={{ fontSize: THEME.FONT.SIZE.SMALL, color: 'orange' }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Price
        fixed={number('fixed', 2)}
        value={number('value', 64)}
        symbol={text('symbol', '$')}
      />
    </ResponsiveView>
  ));

