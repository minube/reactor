import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, text, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Heading from './Heading';

const breadcrumbs = [
  { caption: 'Turismo', href: '/' },
  { caption: 'Gran Bretaña', href: '/' },
  { caption: 'Inglaterra', href: '/' },
  { caption: 'Londres', href: '/' },
];

storiesOf('🛠 Heading', module)
  .addWithJSX('default', () => (
    <Heading title="Actividades en España" />
  ))
  .addWithJSX('with rating', () => (
    <Heading title="Actividades en España" rating={3} />
  ))
  .addWithJSX('with breadcrumbs', () => (
    <Heading title="Actividades en España" breadcrumbs={breadcrumbs} rating={3} />
  ))
  .addWithJSX('with colaborators', () => (
    <Heading title="Actividades en España" breadcrumbs={breadcrumbs} rating={3} />
  ))
  .addWithJSX('with color', () => (
    <Heading color={THEME.COLOR.ACCENT} title="Actividades en España" breadcrumbs={breadcrumbs} rating={3} />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Heading style={{ fontSize: 20, lineHeight: 20, color: 'orange' }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Heading
      color={color('color', THEME.COLOR.TEXT)}
      title={text('title', 'Actividades en España')}
      rating={number('rating', 3)}
    />
  ));

