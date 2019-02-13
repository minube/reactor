import React, { Fragment } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { number, text, object } from '@storybook/addon-knobs/react';

import Price from './Price';

const STYLE = { fontWeight: 800, fontSize: 32, color: 'green' }
const PROPS = { value: 6995.123456 };

storiesOf('✅ Price', module)
  .add('default', () => (
    <Price />
  ))
  .add('value', () => (
    <Price {...PROPS} />
  ))
  .add('locale (es-ES)', () => (
    <Price {...PROPS} locale="es-ES" />
  ))
  .add('fixed (4)', () => (
    <Price fixed={4} {...PROPS} />
  ))
  .add('fixed (0)', () => (
    <Price fixed={0} {...PROPS} />
  ))
  .add('symbol (left)', () => (
    <Price {...PROPS} symbol="$" />
  ))
  .add('symbol (right)', () => (
    <Price {...PROPS} symbol="eur" />
  ))
  .add('title', () => (
    <Price {...PROPS} title="From" />
  ))
  .add('inject <Text> properties', () => (
    <Price {...PROPS} headline={false} subtitle level={2}  />
  ))
  .add('style', () => (
    <Price {...PROPS} style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Price
      locale={text('locale', 'es-ES')}
      title={text('title', 'from')}
      fixed={number('fixed', 2)}
      value={number('value', PROPS.value)}
      symbol={text('symbol', '€')}
      style={object('style', STYLE)}
    />
  ));

