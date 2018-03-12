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
    <Avatar regular resizeMode="cover" style={{ borderRadius:'50%' }} image={IMAGE_AVATAR} href={LINK_AVATAR} />
  ))
  .addWithJSX('small', () => (
    <Avatar small resizeMode="cover" style={{ borderRadius:'50%' }} image={IMAGE_AVATAR} />
  ))
  .addWithJSX('large', () => (
    <Avatar large resizeMode="cover" style={{ borderRadius:'50%' }} image={IMAGE_AVATAR} />
  ))
  .addWithJSX('link', () => (
    <Avatar regular resizeMode="cover" style={{ borderRadius:'50%' }} image={IMAGE_AVATAR} href={LINK_AVATAR} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
      <Avatar
        style={{ borderRadius:'50%' }}
        resizeMode="cover"
        image={IMAGE_AVATAR}
        small={boolean('small', false)}
        regular={boolean('regular', true)}
        large={boolean('large', false)}
      />
    </WebView>
  ));
