import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { array, text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import Avatar from '../Avatar';
import InputList from './InputList';
import Text from '../Text';

const VALUE = ['one', 'two', 'three', 'four', 'five'];
const VALUE_COMPLEX = [
  { avatar: 'https://api.adorable.io/avatars/128/1', name: 'one' },
  { avatar: 'https://api.adorable.io/avatars/128/2', name: 'two' },
  { avatar: 'https://api.adorable.io/avatars/128/3', name: 'three' },
  { avatar: 'https://api.adorable.io/avatars/128/4', name: 'four' },
  { avatar: 'https://api.adorable.io/avatars/128/5', name: 'five' },
]
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };
const item = ({ avatar, name }) => (
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Avatar image={avatar} small />
    <Text style={{ marginLeft: 10 }}>{name}</Text>
  </View>
);

storiesOf('🛠 InputList', module)
  .addWithJSX('default', () => (
    <InputList />
  ))
  .addWithJSX('disabled', () => (
    <InputList disabled />
  ))
  .addWithJSX('error', () => (
    <InputList error="Required field" />
  ))
  .addWithJSX('hint', () => (
    <InputList hint="Optional field" />
  ))
  .addWithJSX('label', () => (
    <InputList label="Username" />
  ))
  .addWithJSX('value', () => (
    <InputList value="three" value={VALUE} />
  ))
  .addWithJSX('itemTemplate', () => (
    <InputList itemTemplate={item} value={VALUE_COMPLEX} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <InputList onChange={action('InputList.onChange()')} title="Press me" value={VALUE} />
  ))
  .addWithJSX('style', () => (
    <InputList style={STYLE} value={VALUE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <InputList
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', null)}
      value={array('value', VALUE)}
      style={object('style', STYLE)}
    />
  ))

