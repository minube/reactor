import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';

import WebView from '../WebView';
import PictureCard from './index';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

storiesOf('✅ PictureCard', module)
  .addWithJSX('default', () => (
    <PictureCard />
  ))
  .addWithJSX('image', () => (
    <PictureCard image={LIPSUM_IMAGE} />
  ))
  .addWithJSX('location', () => (
    <PictureCard location="{location}" image={LIPSUM_IMAGE} />
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
  .addWithJSX('square', () => (
    <PictureCard caption="{caption}" square image={LIPSUM_IMAGE} title="{title}" />
  ))
  .addWithJSX('⚡ onPress', () => (
    <PictureCard image={LIPSUM_IMAGE} onPress={action('PictureCard.onPress()')} />
  ))
  .addWithJSX('style', () => (
    <PictureCard image={LIPSUM_IMAGE} style={{ backgroundColor: 'orange', opacity: 0.75 }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
      <PictureCard
        location={text('location', '{location}')}
        caption={text('caption', '{caption}')}
        small={boolean('small', false)}
        image={text('image', LIPSUM_IMAGE)}
        onPress={action('PictureCard.onPress()')}
        title={text('title', '{title}')}
      />
    </WebView>
  ));
