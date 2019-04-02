import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import {
  boolean, object, number, select,
} from '@storybook/addon-knobs/react';

import Motion from './Motion';
import MOCKS from './Motion.mocks';

storiesOf('✅ Motion', module)
  .add('default', () => (
    <Motion timeline={MOCKS.TIMELINE}>
      <View style={MOCKS.STYLE_VIEW} />
    </Motion>
  ))
  .add('preset', () => (
    <Motion preset="fade" visible={boolean('visible', false)}>
      <View style={MOCKS.STYLE_VIEW} />
    </Motion>
  ))
  .add('style', () => (
    <Motion timeline={MOCKS.TIMELINE} style={MOCKS.STYLE}>
      <View style={MOCKS.STYLE_VIEW} />
    </Motion>
  ))
  .add('🏀 Playground', () => (
    <Motion
      delay={number('delay', 0)}
      disabled={boolean('disabled', false)}
      duration={number('duration', 225)}
      style={object('style', MOCKS.STYLE)}
      preset={select('preset', [undefined, 'fade', 'fadeleft', 'pop'], undefined)}
      timeline={object('timeline', MOCKS.TIMELINE)}
      type={select('type', ['spring', 'timing'], 'spring')}
      useNativeDriver={boolean('useNativeDriver', true)}
      visible={boolean('visible', true)}
    >
      <View style={MOCKS.STYLE_VIEW} />
    </Motion>
  ));
