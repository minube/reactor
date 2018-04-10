import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ResponsiveView from '../ResponsiveView';
import Markdown from './Markdown';

storiesOf('⚠️  Markdown (third-party)', module)
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
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Markdown>
        {text('content', 'Hello World')}
      </Markdown>
    </ResponsiveView>
  ));

