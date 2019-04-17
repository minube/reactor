import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  color, boolean, object, number,
} from '@storybook/addon-knobs/react';

import Text from '../Text';
import Touchable from './Touchable';

const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

const Child = () => (
  <Text
    pointerEvents="none"
    style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: 10 }}
  >
    Hello World
  </Text>
);

storiesOf('✅ Touchable', module)
  .add('default', () => (
    <Touchable />
  ))
  .add('children', () => (
    <Touchable>
      <Child />
    </Touchable>
  ))
  .add('⚡ onPress', () => (
    <Touchable onPress={action('Touchable.onPress()')}>
      <Child />
    </Touchable>
  ))
  .add('rippleColor', () => (
    <Touchable onPress={() => {}} rippleColor="red">
      <Child />
    </Touchable>
  ))
  .add('containerBorderRadius', () => (
    <Touchable onPress={() => {}} containerBorderRadius={48}>
      <Child />
    </Touchable>
  ))
  .add('style', () => (
    <Touchable onPress={() => {}} style={STYLE}>
      <Child />
    </Touchable>
  ))
  .add('🏀 Playground', () => (
    <Touchable
      onPress={action('Touchable.onPress()')}
      rippleColor={color('rippleColor', undefined)}
      style={object('style', STYLE)}
    >
      <Child />
    </Touchable>
  ));
