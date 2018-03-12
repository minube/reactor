import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, color, text } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import PictureCard from './index';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

storiesOf('✅ PictureCard', module)
  .addWithJSX('default', () => (
    <PictureCard />
  ))
  .addWithJSX('image', () => (
    <PictureCard image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('caption', () => (
    <PictureCard caption="{caption}" image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('title', () => (
    <PictureCard image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('caption & title', () => (
    <PictureCard caption="{caption}" image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('small', () => (
    <PictureCard caption="{caption}" small image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('portrait', () => (
    <PictureCard caption="{caption}" portrait image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('⚡ onPress', () => (
    <PictureCard image={LIPSUM_IMAGE} onPress={action('PictureCard.onPress()')} />
  ))
  .addWithJSX('⚡ onLoad', () => (
    <PictureCard image={LIPSUM_IMAGE} onLoad={action('PictureCard.onLoad()')} />
  ))
  .addWithJSX('style', () => (
    <PictureCard image={LIPSUM_IMAGE} style={{ backgroundColor: 'orange', opacity: 0.75 }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <PictureCard
        caption={text('caption', 'minube stories')}
        backgroundColor={color('backgroundColor', undefined)}
        small={boolean('small', false)}
        image={text('image', LIPSUM_IMAGE)}
        onPress={action('PictureCard.onPress()')}
        portrait={boolean('portrait', false)}
        title={text('title', 'Una semana en Mallorca')}
      />
    </ResponsiveView>
  ));
