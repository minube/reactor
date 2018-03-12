import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ResponsiveView from '../ResponsiveView';
import Rating from './Rating';

storiesOf('✅ Rating', module)
  .addWithJSX('default', () => (
    <Rating />
  ))
  .addWithJSX('value', () => (
    <Rating value={3.5} />
  ))
  .addWithJSX('showValue', () => (
    <Rating value={3.5} showValue />
  ))
  .addWithJSX('count', () => (
    <Rating value={4} count={32} />
  ))
  .addWithJSX('caption', () => (
    <Rating value={4} count={32} caption="valoraciones" />
  ))
  .addWithJSX('color', () => (
    <Rating value={4} color={THEME.COLOR.ACCENT} />
  ))
  .addWithJSX('textColor', () => (
    <Rating count={32} value={4} color={THEME.COLOR.ACCENT} textColor={THEME.COLOR.PRIMARY}  />
  ))
  .addWithJSX('style', () => (
    <Rating count={32} style={{ fontSize: 20, lineHeight: 20, color: 'orange' }}/>
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Rating
        color={color('color', THEME.COLOR.TEXT)}
        textColor={color('textColor', THEME.COLOR.TEXT_LIGHTEN)}
        count={number('count', 128)}
        showValue={boolean('showValue', true)}
        value={number('value', 3)}
      />
    </ResponsiveView>
  ));

