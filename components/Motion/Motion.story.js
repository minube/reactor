import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';

import ResponsiveView from '../ResponsiveView';
import Motion from './Motion';

const style = {
  width: 128,
  height: 128,
  backgroundColor: 'grey',
};

const PROPERTIES = ['top', 'left', 'right', 'bottom', 'opacity', 'scale', 'translateX', 'translateY'];

storiesOf('✅ Motion', module)
  .addWithJSX('default', () => (
    <Motion>
      <View style={style} />
    </Motion>
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Motion
        delay={number('delay', 0)}
        disabled={boolean('disabled', false)}
        duration={number('duration', 500)}
        property={select('property', PROPERTIES, 'scale')}
        type={select('type', ['spring', 'timing'], 'spring')}
        useNativeDriver={boolean('useNativeDriver', true)}
        value={number('value', 0.5)}
      >
        <View style={style} />
      </Motion>
    </ResponsiveView>
  ));
