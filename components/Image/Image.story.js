import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, number } from '@storybook/addon-knobs/react';

import LayoutView from '../Layout';
import Image from './Image';

const IMAGE_PLACEHOLDER = 'https://picsum.photos/320/200/?random';
const IMAGE_AKAMAI = 'https://imgs-akamai.mnstatic.com//tools//genericimages//fc5b42a5baceed399c3bb913406693fd3d4d64ef8bb69457697c90cb71b2c4dd.jpg';
const DEFAULT_STYLE = { width: 320, height: 240 };
const CUSTOM_STYLE = {
  borderRadius: 64,
  height: 128,
  width: 128,
};
const SOURCE = { uri: IMAGE_PLACEHOLDER };

storiesOf('✅ Image', module)
  .addWithJSX('default', () => (
    <Image source={SOURCE} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('without source', () => (
    <Image style={DEFAULT_STYLE} />
  ))
  .addWithJSX('small activity', () => (
    <Image size="small" style={DEFAULT_STYLE} />
  ))
  .addWithJSX('resizeMode', () => (
    <Image resizeMode="cover" source={SOURCE} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('responsive', () => (
    <Image responsive source={{ uri: IMAGE_AKAMAI }} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('ratio', () => (
    <Image ratio={10} responsive source={{ uri: IMAGE_AKAMAI }} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('⚡ onLoad', () => (
    <Image onLoad={action('Image.onLoad()')} source={SOURCE} style={DEFAULT_STYLE} />
  ))
  .addWithJSX('style', () => (
    <Image
      source={SOURCE}
      style={CUSTOM_STYLE}
    />
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Image
        small={boolean('small', false)}
        ratio={number('ratio', false)}
        responsive={boolean('responsive', false)}
        onLoad={action('Button.onLoad()')}
        source={object('source', SOURCE, 'image-source')}
        style={object('style', DEFAULT_STYLE, 'image-style')}
      />
    </LayoutView>
  ));
