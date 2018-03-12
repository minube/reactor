import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResponsiveView from '../ResponsiveView';
import Image from './Image';

const IMAGE_PLACEHOLDER = 'https://picsum.photos/320/200/?random';

storiesOf('✅ Image', module)
  .addWithJSX('default', () => (
    <Image resizeMode="cover" source={{ uri: IMAGE_PLACEHOLDER }} style={{ width: 640, height: 400 }} />
  ))
  .addWithJSX('without source', () => (
    <Image style={{ width: 320, height: 240 }} />
  ))
  .addWithJSX('small activity', () => (
    <Image size="small" style={{ width: 320, height: 240 }} />
  ))
  .addWithJSX('⚡ onLoad', () => (
    <Image onLoad={action('Image.onLoad()')} source={{ uri: IMAGE_PLACEHOLDER }} style={{ width: 320, height: 240 }} />
  ))
  .addWithJSX('style', () => (
    <ResponsiveView>
      <Image
        source={{ uri: IMAGE_PLACEHOLDER }}
        style={{
          borderRadius: 64,
          height: 128,
          width: 128,
        }}
      />
    </ResponsiveView>
  ));
