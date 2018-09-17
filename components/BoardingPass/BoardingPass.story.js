import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color, object } from '@storybook/addon-knobs/react';

import BoardingPass from './BoardingPass';

const children = <Text>Children component...</Text>;
const Loading = <Text>Loading...</Text>;

const endpoint = 'httpbin.org/';
const service = 'get';
const PROPS = { endpoint, service };

storiesOf('✅ BoardingPass', module)
  .addWithJSX('default', () => (
    <BoardingPass>
      {children}
    </BoardingPass>
  ))
  .addWithJSX('enabled (false)', () => (
    <BoardingPass enabled={false}>
      {children}
    </BoardingPass>
  ))
  .addWithJSX('endpoint & method', () => (
    <BoardingPass {...PROPS}>
      {children}
    </BoardingPass>
  ))
  .addWithJSX('loading', () => (
    <BoardingPass loading={Loading} {...PROPS}>
      {children}
    </BoardingPass>
  ));


