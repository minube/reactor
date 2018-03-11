import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import WebView from '../WebView';
import Avatar from './Avatar';
import { THEME } from '../../common';

const IMAGE_AVATAR = 'https://avatars.mnstatic.com/117881_80x80_5.jpg';
const LINK_AVATAR = 'https://www.minube.com';
const RADIUS_AVATAR = 100;
const {
   AVATAR,
} = THEME;

storiesOf('🛠 Avatar', module)
  .addWithJSX('default', () => (
    <Avatar big resizeMode="cover" image={IMAGE_AVATAR} href={LINK_AVATAR} />
  ))
  .addWithJSX('small', () => (
    <Avatar small resizeMode="cover" image={IMAGE_AVATAR} href={LINK_AVATAR} />
  ))
  .addWithJSX('medium', () => (
    <Avatar medium resizeMode="cover" image={IMAGE_AVATAR} href={LINK_AVATAR} />
  ))
  .addWithJSX('big', () => (
    <Avatar big resizeMode="cover" image={IMAGE_AVATAR} href={LINK_AVATAR} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
      <Avatar
        resizeMode="cover"
        image={IMAGE_AVATAR}
        href={LINK_AVATAR}
        small={boolean('small', false)}
        medium={boolean('medium', false)}
        big={boolean('big', true)}
      />
    </WebView>
  ));
