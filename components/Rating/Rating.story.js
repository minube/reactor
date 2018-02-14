import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Rating from './Rating';

storiesOf('✅ Rating', module)
  .addWithJSX('default', () => (
    <Rating />
  ))
  .addWithJSX('with value', () => (
    <Rating value={3} />
  ))
  .addWithJSX('with count', () => (
    <Rating value={4} count={32} />
  ))
  .addWithJSX('with color', () => (
    <Rating value={4} color={THEME.COLOR.ACCENT} />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Rating style={{ fontSize: 20, lineHeight: 20, color: 'orange' }}/>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Rating
      color={color('color', 128)}
      count={number('count', 128)}
      value={number('value', 3)}
    />
  ));

