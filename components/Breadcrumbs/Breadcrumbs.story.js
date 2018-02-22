import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color, object } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import WebView from '../WebView';
import Breadcrumbs from './Breadcrumbs';

const dataSource = [
  { caption: 'Turismo', href: '/' },
  { caption: 'Gran Bretaña', href: '/' },
  { caption: 'Inglaterra', href: '/' },
  { caption: 'Londres', href: '/' },
];

storiesOf('🛠 Breadcrumbs', module)
  .addWithJSX('default', () => (
    <Breadcrumbs dataSource={dataSource} />
  ))
  .addWithJSX('with color', () => (
    <Breadcrumbs dataSource={dataSource} color={THEME.COLOR.ACCENT} />
  ))
  .addWithJSX('with onPress', () => (
    <Breadcrumbs dataSource={dataSource} onPress={action('Breadcrumbs.onPress()')} />
  ))
  .addWithJSX('💄 Custom Style', () => (
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
    <WebView>
      <Breadcrumbs
        dataSource={object('dataSource', dataSource, 'heading-dataSource')}
        color={color('color', THEME.COLOR.TEXT)}
      />
    </WebView>
  ));

