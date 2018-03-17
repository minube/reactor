import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';
import { boolean, color, number, select } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ResponsiveView from '../ResponsiveView';
import Icon from './Icon';

storiesOf('✅ Icon', module)
  .addWithJSX('default', () => (
    <Icon />
  ))
  .addWithJSX('value', () => (
    <Icon value="menu" />
  ))
  .addWithJSX('color (only Native)', () => (
    <WithNotes notes="Color is only supported in Native environments">
      <Icon value="menu" color={THEME.COLOR.ERROR} />
    </WithNotes>
  ))
  .addWithJSX('invert (only Web)', () => (
    <WithNotes notes="invert is only supported in web environments">
      <Icon value="menu" invert />
    </WithNotes>
  ))
  .addWithJSX('size', () => (
    <Icon value="menu" size={48} />
  ))
  .addWithJSX('style', () => (
    <Icon style={{ backgroundColor: THEME.COLOR.ACCENT }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <Icon
        size={number('size', THEME.FONT.SIZE.LARGE)}
        color={color('color', THEME.COLOR.TEXT)}
        invert={boolean('invert', false)}
        value={select('value', ['base', 'left', 'menu', 'options', 'right', 'search'], 'search')}
      />
    </ResponsiveView>
  ));

