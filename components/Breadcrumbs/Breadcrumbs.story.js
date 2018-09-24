import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color, object } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Breadcrumbs from './Breadcrumbs';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: THEME.OFFSET };

const dataSource = [
  { caption: 'Spain', href: '/' },
  { caption: 'Basque Country', href: '/' },
  { caption: 'Bilbao', href: '/' },
];

storiesOf('✅ Breadcrumbs', module)
  .addWithJSX('default', () => (
    <Breadcrumbs dataSource={dataSource} />
  ))
  .addWithJSX('color', () => (
    <Breadcrumbs dataSource={dataSource} color={THEME.COLOR.PRIMARY} />
  ))
  .addWithJSX('⚡ onPress', () => (
    <Breadcrumbs dataSource={dataSource} onPress={action('Breadcrumbs.onPress()')} />
  ))
  .addWithJSX('style', () => (
    <Breadcrumbs dataSource={dataSource} style={STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Breadcrumbs
      dataSource={object('dataSource', dataSource, 'heading-dataSource')}
      color={color('color', THEME.COLOR.TEXT)}
      style={object('style', STYLE)}
    />
  ));

