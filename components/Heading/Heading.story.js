import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, object, text, number } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Heading from './Heading';

const BREADCRUMBS = [
  { caption: 'Turismo', href: '/' },
  { caption: 'Gran Bretaña', href: '/' },
  { caption: 'Inglaterra', href: '/' },
  { caption: 'Londres', href: '/' },
];

const CONTRIBUTORS = {
  total: 128,
  label: 'colaborators',
  preview: [
    { id: 8, image: 'https://api.adorable.io/avatars/48/8' },
    { id: 16, image: 'https://api.adorable.io/avatars/48/16' },
    { id: 32, image: 'https://api.adorable.io/avatars/48/32' },
  ],
};

const RATING = { caption: 'valoraciones', count: 12, value: 4.5 };

storiesOf('🛠 Heading', module)
  .addWithJSX('default', () => (
    <Heading title="Actividades en España" />
  ))
  .addWithJSX('with rating', () => (
    <Heading title="Actividades en España" rating={RATING} />
  ))
  .addWithJSX('with breadcrumbs', () => (
    <Heading title="Actividades en España" breadcrumbs={BREADCRUMBS} rating={3} />
  ))
  .addWithJSX('with contributors', () => (
    <Heading contributors={CONTRIBUTORS} title="Actividades en España" breadcrumbs={BREADCRUMBS} rating={3} />
  ))
  .addWithJSX('with color', () => (
    <Heading
      breadcrumbs={BREADCRUMBS}
      color={THEME.COLOR.ACCENT}
      contributors={CONTRIBUTORS}
      title="Actividades en España"
      rating={RATING}
    />
  ))
  .addWithJSX('with column', () => (
    <Heading
      breadcrumbs={BREADCRUMBS}
      contributors={CONTRIBUTORS}
      title="Actividades en España"
      rating={RATING}
      column
    />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Heading
      color={THEME.COLOR.WHITE}
      column
      rating={RATING}
      style={{
        padding: THEME.OFFSET,
        backgroundColor: 'rgba(0,0,0,0.25)',
      }}
      title="British Museum"
    />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Heading
      breadcrumbs={object('breadcrumbs', BREADCRUMBS, 'heading-breadcrumbs')}
      color={color('color', THEME.COLOR.TEXT)}
      column={boolean('column', false)}
      contributors={object('contributors', CONTRIBUTORS, 'heading-contributors')}
      rating={object('rating', RATING, 'heading-rating')}
      title={text('title', 'Actividades en España')}
    />
  ));

