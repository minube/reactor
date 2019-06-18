import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  boolean, color, object, text,
} from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Snackbar from './Snackbar';

const { COLOR } = THEME;
const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.';
const PROPS = { visible: true };

storiesOf('✅ Snackbar', module)
  .add('default', () => (
    <Snackbar {...PROPS} />
  ))
  .add('caption', () => (
    <Snackbar {...PROPS} caption={LOREM} />
  ))
  .add('button', () => (
    <Snackbar {...PROPS} caption={LOREM} button="CLOSE" />
  ))
  .add('color', () => (
    <Snackbar {...PROPS} color={COLOR.ERROR} button="CLOSE" />
  ))
  .add('visible (false)', () => (
    <Snackbar visible={false} caption={LOREM} />
  ))
  .add('⚡ onPress', () => (
    <Snackbar {...PROPS} caption={LOREM} button="CLOSE" onPress={action('Snackbar.onPress()')} />
  ))
  .add('🏀 Playground', () => (
    <Snackbar
      caption={text('caption', LOREM)}
      button={text('button', 'CLOSE')}
      color={color('color', COLOR.ERROR)}
      onPress={action('Snackbar.onPress()')}
      visible={boolean('visible', true)}
    />
  ));
