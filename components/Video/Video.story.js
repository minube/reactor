import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number, object } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import Video from './Video';

const VIDEO_PLACEHOLDER = 'https://coverr.co/s3/mp4/Cloud_Surf.mp4';
const VIDEO_STYLE = {
  borderRadius: 24,
};

storiesOf('✅ Video', module)
  .addWithJSX('default', () => (
    <Video />
  ))
  .addWithJSX('source', () => (
    <Video source={VIDEO_PLACEHOLDER} />
  ))
  .addWithJSX('youtube source', () => (
    <Video source="https://www.youtube.com/watch?v=cx4MxQcD8Fk" />
  ))
  .addWithJSX('vimeo source', () => (
    <Video source="https://vimeo.com/225434434" />
  ))
  .addWithJSX('autoPlay', () => (
    <Video autoPlay source={VIDEO_PLACEHOLDER} />
  ))
  .addWithJSX('controls', () => (
    <Video controls source={VIDEO_PLACEHOLDER} />
  ))
  .addWithJSX('dimensions', () => (
    <Video height={128} source={VIDEO_PLACEHOLDER} width={256} />
  ))
  .addWithJSX('⚡ onLoad (only web)', () => (
    <Video onLoad={action('Video.onLoad()')} source={VIDEO_PLACEHOLDER} />
  ))
  .addWithJSX('preload', () => (
    <Video preload source={VIDEO_PLACEHOLDER} />
  ))
  .addWithJSX('style', () => (
    <Video source={VIDEO_PLACEHOLDER} style={VIDEO_STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Video
        autoplay={boolean('autoplay', true)}
        controls={boolean('controls', false)}
        height={number('height', 226)}
        preload={boolean('preload', false)}
        source={text('source', VIDEO_PLACEHOLDER)}
        style={object('style', VIDEO_STYLE, 'video-style')}
        width={number('width', 428)}
      />
    </ResponsiveView>
  ));
