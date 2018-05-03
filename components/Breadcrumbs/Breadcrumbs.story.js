import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color, object } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import LayoutView from '../Layout';
import Breadcrumbs from './Breadcrumbs';

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
    <Breadcrumbs
      dataSource={dataSource}
      style={{
        padding: THEME.OFFSET,
        backgroundColor: 'rgba(0,0,0,0.25)',
        fontSize: THEME.FONT.SIZE.REGULAR,
      }}
    />
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Breadcrumbs
        dataSource={object('dataSource', dataSource, 'heading-dataSource')}
        color={color('color', THEME.COLOR.TEXT)}
      />
    </LayoutView>
  ));

