import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';

import PictureCard from './index';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

storiesOf('PictureCard', module)
  .addWithJSX('Empty', () => (
    <PictureCard empty />
  ))
  .addWithJSX('Just a picture', () => (
    <PictureCard image={LIPSUM_IMAGE}  />
  ))
  .addWithJSX('with action', () => (
    <PictureCard image={LIPSUM_IMAGE} onPress={action('PictureCard.onPress()')} />
  ))
  .addWithJSX('Located', () => (
    <PictureCard location="{location}" image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('Caption', () => (
    <PictureCard caption="{caption}" image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('Title', () => (
    <PictureCard image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('Caption & Title', () => (
    <PictureCard caption="{caption}" image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('Small', () => (
    <PictureCard caption="{caption}" small image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('square', () => (
    <PictureCard caption="{caption}" square image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <PictureCard image={LIPSUM_IMAGE} style={{ backgroundColor: 'orange', margin: 10 }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <PictureCard
      location={text('location', '{location}')}
      caption={text('caption', '{caption}')}
      small={boolean('small', false)}
      image={text('image', LIPSUM_IMAGE)}
      onPress={action('PictureCard.onPress()')}
      title={text('title', '{title}')}
    />
  ));
