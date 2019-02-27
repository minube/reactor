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
  .add('default', () => (
    <Breadcrumbs dataSource={dataSource} />
  ))
  .add('color', () => (
    <Breadcrumbs dataSource={dataSource} color={THEME.COLOR.PRIMARY} />
  ))
  .add('⚡ onPress', () => (
    <Breadcrumbs dataSource={dataSource} onPress={action('Breadcrumbs.onPress()')} />
  ))
  .add('style', () => (
    <Breadcrumbs dataSource={dataSource} style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <Breadcrumbs
      dataSource={object('dataSource', dataSource, 'heading-dataSource')}
      color={color('color', THEME.COLOR.TEXT)}
      style={object('style', STYLE)}
    />
  ));
