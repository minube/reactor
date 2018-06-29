import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Markdown from './Markdown';

storiesOf('✅ Markdown', module)
  .addWithJSX('default', () => (
    <Markdown>hello world</Markdown>
  ))
  .addWithJSX('including *', () => (
    <Markdown>hello *world*</Markdown>
  ))
  .addWithJSX('including **', () => (
    <Markdown>hello **world**.</Markdown>
  ))
  .addWithJSX('combining * & **', () => (
    <Markdown>hello *world*, I'm **javi**.</Markdown>
  ))
  .addWithJSX('including a <Text> property', () => (
    <Markdown accent>Hello *World*</Markdown>
  ))
  .addWithJSX('style container', () => (
    <Markdown styleContainer={{ width: 192, backgroundColor: THEME.COLOR.PRIMARY, padding: 16 }}>
      Lorem Ipsum is **simply dummy** text of the printing and typesetting *industry.*
    </Markdown>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Markdown>
      {text('content', 'Hello World')}
    </Markdown>
  ));

