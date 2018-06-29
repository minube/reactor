import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { boolean, color, number, select } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import LayoutView from '../Layout';
import Icon from './Icon';

storiesOf('✅ Icon', module)
  .addWithJSX('default', () => (
    <Icon />
  ))
  .addWithJSX('value', () => (
    <Icon value="closeDark" />
  ))
  .addWithJSX('value (as uri)', () => (
    <Icon value="https://api.adorable.io/avatars/48/8" />
  ))
  .addWithJSX('color (only Native)', () => (
    <withNotes notes="Color is only supported in Native environments">
      <Icon color={THEME.COLOR.ERROR} value="closeDark" />
    </withNotes>
  ))
  .addWithJSX('invert (only Web)', () => (
    <withNotes notes="invert is only supported in web environments">
      <Icon invert value="closeDark" />
    </withNotes>
  ))
  .addWithJSX('size', () => (
    <Icon size={48} value="closeDark" />
  ))
  .addWithJSX('style', () => (
    <Icon style={{ backgroundColor: THEME.COLOR.ACCENT }} value="closeDark" />
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Icon
        size={number('size', THEME.FONT.SIZE.LARGE)}
        color={color('color', THEME.COLOR.TEXT)}
        invert={boolean('invert', false)}
        value={select('value', ['apps', 'close', 'closeDark', 'emailDark', 'left', 'right', 'share'], 'closeDark')}
      />
    </LayoutView>
  ));

