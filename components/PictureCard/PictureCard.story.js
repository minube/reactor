import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import PictureCard from './index';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

storiesOf('PictureCard', module)
  .addWithJSX('Empty', () => (
    <PictureCard empty />
  ))
  .addWithJSX('Just a picture', () => (
    <PictureCard image="image" />
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
  .addWithJSX('Without elevation', () => (
    <PictureCard elevation={false} image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <PictureCard
      location={text('location', '{location}')}
      caption={text('caption', '{caption}')}
      elevation={boolean('elevation', true)}
      image={text('image', LIPSUM_IMAGE)}
      onPress={action('PictureCard.onPress()')}
      title={text('title', '{title}')}
    />
  ));
