import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResponsiveView from '../ResponsiveView';
import Image from './Image';

const IMAGE_PLACEHOLDER = 'https://picsum.photos/320/200/?random';
const IMAGE_AKAMAI = 'https://imgs-akamai.mnstatic.com//tools//genericimages//fc5b42a5baceed399c3bb913406693fd3d4d64ef8bb69457697c90cb71b2c4dd.jpg';
const DEFAULT_STYLE = { width: 320, height: 240 };

storiesOf('✅ Image', module)
  .addWithJSX('default', () => (
    <Image source={{ uri: IMAGE_PLACEHOLDER }} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('without source', () => (
    <Image style={DEFAULT_STYLE} />
  ))
  .addWithJSX('small activity', () => (
    <Image size="small" style={DEFAULT_STYLE} />
  ))
  .addWithJSX('resizeMode', () => (
    <Image resizeMode="cover" source={{ uri: IMAGE_PLACEHOLDER }} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('responsive', () => (
    <Image responsive source={{ uri: IMAGE_AKAMAI }} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('ratio', () => (
    <Image ratio={10} responsive source={{ uri: IMAGE_AKAMAI }} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('⚡ onLoad', () => (
    <Image onLoad={action('Image.onLoad()')} source={{ uri: IMAGE_PLACEHOLDER }} style={DEFAULT_STYLE} />
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
