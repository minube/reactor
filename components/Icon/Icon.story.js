import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean, color, number, object, select,
} from '@storybook/addon-knobs/react';

import Icon from './Icon';
import MOCKS from './Icon.mocks';

storiesOf('✅ Icon', module)
  .add('default', () => (
    <Icon />
  ))
  .add('value', () => (
    <Icon value={MOCKS.VALUE} />
  ))
  .add('value (as uri)', () => (
    <Icon value={MOCKS.VALUE_URI} />
  ))
  .add('value:navLeft', () => (
    <Icon value="navLeft" />
  ))
  .add('value:navDown', () => (
    <Icon value="navDown" />
  ))
  .add('value:navRight', () => (
    <Icon value="navRight" />
  ))
  .add('value:navUp', () => (
    <Icon value="navUp" />
  ))
  .add('color (only Native)', () => (
    <Icon color={MOCKS.COLOR} value={MOCKS.VALUE} />
  ))
  .add('invert (only Web)', () => (
    <Icon invert value={MOCKS.VALUE} />
  ))
  .add('size', () => (
    <Icon size={48} value={MOCKS.VALUE} />
  ))
  .add('style', () => (
    <Icon style={MOCKS.STYLE} value={MOCKS.VALUE} />
  ))
  .add('🏀 Playground', () => (
    <Icon
      size={number('size', 16)}
      color={color('color', MOCKS.COLOR)}
      invert={boolean('invert', false)}
      style={object('style', MOCKS.STYLE)}
      value={select('value', MOCKS.ICONS, MOCKS.VALUE)}
    />
  ));
