import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color, object } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import BoardingPass from './BoardingPass';

const endpoint = 'httpbin.org/';
const service = 'get';
const PROPS = { endpoint, service };

storiesOf('✅ BoardingPass', module)
  .addWithJSX('default', () => (
    <BoardingPass />
  ))
  // .addWithJSX('endpoint', () => (
  //   <BoardingPass {...PROPS} />
  // ))
  // .addWithJSX('⚡ onError', () => (
  //   <BoardingPass {...PROPS} onError={action('BoardingPass.onError()')} />
  // ))
  // .addWithJSX('⚡ onResponse', () => (
  //   <BoardingPass {...PROPS} onResponse={action('BoardingPass.onResponse()')} />
  // ))
  // .addWithJSX('style', () => (
  //   <BoardingPass
  //     dataSource={dataSource}
  //     style={{
  //       padding: THEME.OFFSET,
  //       backgroundColor: 'rgba(0,0,0,0.25)',
  //       fontSize: THEME.FONT.SIZE.REGULAR,
  //     }}
  //   />
  // ))
  // .addWithJSX('🏀 Playground', () => (
  //   <BoardingPass
  //     dataSource={object('dataSource', dataSource, 'heading-dataSource')}
  //     color={color('color', THEME.COLOR.TEXT)}
  //   />
  // ));

