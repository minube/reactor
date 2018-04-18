import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { boolean, object, number, select } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import Motion from './Motion';

const style = {
  width: 128,
  height: 128,
  backgroundColor: 'grey',
};

const PROPERTIES = ['top', 'left', 'right', 'bottom', 'opacity', 'scale', 'translateX', 'translateY'];

const timeline = [
  { property: 'opacity', value: 0.5 },
  { property: 'scale', value: 0.5 },
  { property: 'left', value: 128 },
];

storiesOf('✅ Motion', module)
  .addWithJSX('default', () => (
    <Motion timeline={timeline}>
      <View style={style} />
    </Motion>
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Motion
        delay={number('delay', 0)}
        disabled={boolean('disabled', false)}
        duration={number('duration', 500)}
        timeline={object('timeline', timeline, 'motion-timeline')}
        type={select('type', ['spring', 'timing'], 'spring')}
        useNativeDriver={boolean('useNativeDriver', true)}
      >
        <View style={style} />
      </Motion>
    </ResponsiveView>
  ));
