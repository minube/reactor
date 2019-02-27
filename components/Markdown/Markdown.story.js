import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Markdown from './Markdown';

storiesOf('✅ Markdown', module)
  .add('default', () => (
    <Markdown>hello world</Markdown>
  ))
  .add('including *', () => (
    <Markdown>hello *world*</Markdown>
  ))
  .add('including **', () => (
    <Markdown>hello **world**.</Markdown>
  ))
  .add('combining * & **', () => (
    <Markdown>hello *world*, I'm **javi**.</Markdown>
  ))
  .add('inject a <Text> property', () => (
    <Markdown subtitle level={2}>Hello *World*</Markdown>
  ))
  .add('style container', () => (
    <Markdown styleContainer={{ width: 192, backgroundColor: THEME.COLOR.PRIMARY, padding: 16 }}>
      Lorem Ipsum is **simply dummy** text of the printing and typesetting *industry.*
    </Markdown>
  ))
  .add('🏀 Playground', () => (
    <Markdown>
      {text('content', 'Hello World')}
    </Markdown>
  ));
