import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, color, object, text } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import PictureCard from './index';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';
const STYLE = { backgroundColor: 'rgba(0,255,0,1)', opacity: 0.75 };
const STYLE_CONTAINER = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

storiesOf('✅ PictureCard', module)
  .addWithJSX('default', () => (
    <PictureCard />
  ))
  .addWithJSX('image', () => (
    <PictureCard image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('backgroundColor', () => (
    <PictureCard image={LIPSUM_IMAGE} backgroundColor={THEME.COLOR.PRIMARY} />
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
    <PictureCard image={LIPSUM_IMAGE} style={STYLE} />
  ))
  .addWithJSX('styleContainer', () => (
    <PictureCard image={LIPSUM_IMAGE} styleContainer={STYLE_CONTAINER} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <PictureCard
      caption={text('caption', 'minube stories')}
      backgroundColor={color('backgroundColor', undefined)}
      small={boolean('small', false)}
      image={text('image', LIPSUM_IMAGE)}
      onPress={action('PictureCard.onPress()')}
      portrait={boolean('portrait', false)}
      title={text('title', 'Una semana en Mallorca')}
      style={object('style', STYLE)}
      styleContainer={object('styleContainer', STYLE_CONTAINER)}
    />
  ));
