import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';
import { color, number, select } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import ResponsiveView from '../ResponsiveView';
import Icon from './Icon';

storiesOf('🛠 Icon', module)
  .addWithJSX('default', () => (
    <Icon />
  ))
  .addWithJSX('value', () => (
    <Icon value="menu" />
  ))
  .addWithJSX('🔴 color', () => (
    <WithNotes notes="Color is only supported in iOS environments">
      <Icon value="menu" color={THEME.COLOR.TEXT_LIGHTEN} />
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
        value={select('value', ['search', 'menu'], 'search')}
      />
    </ResponsiveView>
  ));

