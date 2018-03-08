import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import WebView from '../WebView';
import Motion from './Motion';

const style = {
  width: 128,
  height: 128,
  backgroundColor: 'grey',
};

storiesOf('✅ Motion', module)
  .addWithJSX('default', () => (
    <Motion>
      <View style={style} />
    </Motion>
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
      <Motion
        delay={number('delay', 0)}
        duration={number('duration', 500)}
        property={select('property', ['top', 'left', 'right', 'bottom', 'opacity'], 'top')}
        type={select('type', ['spring', 'timing'], 'spring')}
        useNativeDriver={boolean('useNativeDriver', true)}
        value={number('value', 0)}
      >
        <View style={style} />
      </Motion>
    </WebView>
  ));
