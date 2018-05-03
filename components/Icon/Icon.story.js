import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';
import { boolean, color, number, select } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import LayoutView from '../Layout';
import Icon from './Icon';

storiesOf('✅ Icon', module)
  .addWithJSX('default', () => (
    <Icon />
  ))
  .addWithJSX('value', () => (
    <Icon value="menu" />
  ))
  .addWithJSX('value (as uri)', () => (
    <Icon value="https://api.adorable.io/avatars/48/8" />
  ))
  .addWithJSX('color (only Native)', () => (
    <WithNotes notes="Color is only supported in Native environments">
      <Icon color={THEME.COLOR.ERROR} />
    </WithNotes>
  ))
  .addWithJSX('invert (only Web)', () => (
    <WithNotes notes="invert is only supported in web environments">
      <Icon invert />
    </WithNotes>
  ))
  .addWithJSX('size', () => (
    <Icon size={48} />
  ))
  .addWithJSX('style', () => (
    <Icon style={{ backgroundColor: THEME.COLOR.ACCENT }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Icon
        size={number('size', THEME.FONT.SIZE.LARGE)}
        color={color('color', THEME.COLOR.TEXT)}
        invert={boolean('invert', false)}
        value={select('value', ['base', 'apps', 'left', 'options', 'right'], 'base')}
      />
    </LayoutView>
  ));

