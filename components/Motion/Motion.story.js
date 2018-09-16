import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { boolean, object, number, select } from '@storybook/addon-knobs/react';

import Motion from './Motion';
import MotionPreset from './MotionPreset';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 32 };
const STYLE_VIEW = {
  width: 128,
  height: 128,
  backgroundColor: 'pink',
};

const PROPERTIES = ['top', 'left', 'right', 'bottom', 'opacity', 'scale', 'translateX', 'translateY'];

const timeline = [
  { property: 'opacity', value: 0.75 },
  { property: 'scale', value: 0.5 },
  { property: 'left', value: 128 },
];

storiesOf('✅ Motion', module)
  .addWithJSX('default', () => (
    <Motion timeline={timeline}>
      <View style={STYLE_VIEW} />
    </Motion>
  ))
  .addWithJSX('preset', () => (
    <MotionPreset visible={boolean('visible', false)}>
      <View style={STYLE_VIEW} />
    </MotionPreset>
  ))
  .addWithJSX('style', () => (
    <Motion timeline={timeline} style={STYLE}>
      <View style={STYLE_VIEW} />
    </Motion>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Motion
      delay={number('delay', 0)}
      disabled={boolean('disabled', false)}
      duration={number('duration', 500)}
      style={object('style', STYLE)}
      timeline={object('timeline', timeline)}
      type={select('type', ['spring', 'timing'], 'spring')}
      useNativeDriver={boolean('useNativeDriver', true)}
    >
      <View style={STYLE_VIEW} />
    </Motion>
  ));
