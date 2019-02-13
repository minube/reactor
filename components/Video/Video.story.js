import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number, object } from '@storybook/addon-knobs/react';

import Video from './Video';

const VIDEO_PLACEHOLDER = 'https://storage.googleapis.com/coverr-main/mp4/Surfers-Paradise.mp4';
const VIDEO_STYLE = {
  borderRadius: 24,
};

storiesOf('✅ Video', module)
  .add('default', () => (
    <Video />
  ))
  .add('source', () => (
    <Video source={VIDEO_PLACEHOLDER} />
  ))
  .add('youtube source', () => (
    <Video source="https://www.youtube.com/watch?v=cx4MxQcD8Fk" />
  ))
  .add('vimeo source', () => (
    <Video source="https://vimeo.com/225434434" />
  ))
  .add('autoPlay', () => (
    <Video autoPlay source={VIDEO_PLACEHOLDER} />
  ))
  .add('controls', () => (
    <Video controls source={VIDEO_PLACEHOLDER} />
  ))
  .add('dimensions', () => (
    <Video height={128} source={VIDEO_PLACEHOLDER} width={256} />
  ))
  .add('preload', () => (
    <Video preload source={VIDEO_PLACEHOLDER} />
  ))
  .add('⚡ onLoad (only web)', () => (
    <Video source={VIDEO_PLACEHOLDER} onLoad={action('Video.onLoad()')} />
  ))
  .add('style', () => (
    <Video source={VIDEO_PLACEHOLDER} style={VIDEO_STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Video
      autoplay={boolean('autoplay', true)}
      controls={boolean('controls', false)}
      height={number('height', 180)}
      preload={boolean('preload', false)}
      source={text('source', VIDEO_PLACEHOLDER)}
      style={object('style', VIDEO_STYLE, 'video-style')}
      width={number('width', 320)}
    />
  ));
