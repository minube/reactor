import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import Video from './Video';

const VIDEO_PLACEHOLDER = 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';
const VIDEO_STYLE = {
  width: 640,
  height: 400,
};

storiesOf('✅ Video', module)
  .addWithJSX('default', () => (
    <Video />
  ))
  .addWithJSX('source', () => (
    <Video source="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
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
  .addWithJSX('⚡ onLoad', () => (
    <Video onLoad={action('Video.onLoad()')} source={VIDEO_PLACEHOLDER} />
  ))
  .addWithJSX('style', () => (
    <Video source={VIDEO_PLACEHOLDER} style={VIDEO_STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Video
        autoplay={boolean('autoplay', false)}
        controls={boolean('controls', false)}
        source={text('source', VIDEO_PLACEHOLDER)}
        style={object('style', VIDEO_STYLE, 'video-style')}
      />
    </ResponsiveView>
  ));
