import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Rating from './Rating';

storiesOf('✅ Rating', module)
  .add('default', () => (
    <Rating />
  ))
  .add('value', () => (
    <Rating value={3.5} />
  ))
  .add('showValue', () => (
    <Rating value={3.5} showValue />
  ))
  .add('count', () => (
    <Rating value={4} count={32} />
  ))
  .add('caption', () => (
    <Rating value={4} count={32} caption="valoraciones" />
  ))
  .add('color', () => (
    <Rating value={4} color={THEME.COLOR.SECONDARY} />
  ))
  .add('textColor', () => (
    <Rating count={32} value={4} color={THEME.COLOR.SECONDARY} textColor={THEME.COLOR.PRIMARY} />
  ))
  .add('style', () => (
    <Rating count={32} style={{ fontSize: 20, lineHeight: 20, color: 'orange' }} />
  ))
  .add('🏀 Playground', () => (
    <Rating
      color={color('color', THEME.COLOR.TEXT)}
      textColor={color('textColor', THEME.COLOR.TEXT_LIGHTEN)}
      count={number('count', 128)}
      showValue={boolean('showValue', true)}
      value={number('value', 3)}
    />
  ));
