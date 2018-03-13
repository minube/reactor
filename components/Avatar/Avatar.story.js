import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs/react';

import WebView from '../WebView';
import Avatar from './Avatar';

const LOREM_AVATAR = 'https://avatars.mnstatic.com/117881_80x80_5.jpg';
const STYLE = { borderRadius: 5, width: 128, height: 128 };

storiesOf('🛠 Avatar', module)
  .addWithJSX('default', () => (
    <Avatar image={LOREM_AVATAR} />
  ))
  .addWithJSX('small', () => (
    <Avatar small image={LOREM_AVATAR} />
  ))
  .addWithJSX('large', () => (
    <Avatar large image={LOREM_AVATAR} />
  ))
  .addWithJSX('style', () => (
    <Avatar image={LOREM_AVATAR} style={STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
      <Avatar
        image={text('image', LOREM_AVATAR)}
        small={boolean('small', false)}
        large={boolean('large', false)}
        style={object('style', STYLE, 'avatar-style')}
      />
    </WebView>
  ));
