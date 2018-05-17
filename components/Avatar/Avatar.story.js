import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs/react';

import LayoutView from '../Layout';
import Avatar from './Avatar';

const LOREM_AVATAR = 'https://api.adorable.io/avatars/128/8';
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
    <LayoutView>
      <Avatar
        image={text('image', LOREM_AVATAR)}
        small={boolean('small', false)}
        large={boolean('large', false)}
        style={object('style', STYLE, 'avatar-style')}
      />
    </LayoutView>
  ));
