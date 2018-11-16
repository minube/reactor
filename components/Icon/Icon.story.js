import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { boolean, color, number, select } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Icon from './Icon';

const ICONS = [
  'close',
  'closeContrast',
  'email',
  'facebook',
  'google',
  'left',
  'linkedin',
  'right',
  'shareContrast',
  'twitter',
]

storiesOf('✅ Icon', module)
  .add('default', () => (
    <Icon />
  ))
  .add('value', () => (
    <Icon value={ICONS[1]} />
  ))
  .add('value (as uri)', () => (
    <Icon value="https://api.adorable.io/avatars/48/8" />
  ))
  .add('color (only Native)', () => (
    <withNotes notes="Color is only supported in Native environments">
      <Icon color={THEME.COLOR.ERROR} value={ICONS[1]} />
    </withNotes>
  ))
  .add('invert (only Web)', () => (
    <withNotes notes="invert is only supported in web environments">
      <Icon invert value={ICONS[1]} />
    </withNotes>
  ))
  .add('size', () => (
    <Icon size={48} value={ICONS[1]} />
  ))
  .add('style', () => (
    <Icon style={{ backgroundColor: THEME.COLOR.SECONDARY }} value="closeDark" />
  ))
  .add('🏀 Playground', () => (
    <Icon
      size={number('size', 16)}
      color={color('color', THEME.COLOR.TEXT)}
      invert={boolean('invert', false)}
      value={select('value', ICONS, 'closeDark')}
    />
  ));

