import React, { Component } from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { array, text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import Avatar from '../Avatar';
import InputList from './InputList';
import Text from '../Text';

const DATA_SOURCE = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
const VALUE = ['one', 'two', 'three', 'four', 'five'];
const VALUE_COMPLEX = [
  { avatar: 'https://api.adorable.io/avatars/128/1', name: 'one' },
  { avatar: 'https://api.adorable.io/avatars/128/2', name: 'two' },
  { avatar: 'https://api.adorable.io/avatars/128/3', name: 'three' },
  { avatar: 'https://api.adorable.io/avatars/128/4', name: 'four' },
  { avatar: 'https://api.adorable.io/avatars/128/5', name: 'five' },
]
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', maxWidth: 320 };
const item = ({ avatar, name }) => (
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Avatar image={avatar} small />
    <Text tiny semibold style={{ marginLeft: 6 }}>{name}</Text>
  </View>
);

class InputListHOC extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  _onChange = (value) => {
    const { props: { onChange } } = this;
    this.setState({ value });
    if (onChange) onChange(value);
  }

  render() {
    const { _onChange, props, state: { value = {} } } = this;
    return <InputList {...props} value={value} onChange={_onChange} />
  }
}

storiesOf('☑️ InputList', module)
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
    <InputList label="Numbers" />
  ))
  .addWithJSX('value', () => (
    <InputList label="Numbers" value="three" value={VALUE} />
  ))
  .addWithJSX('dataSource', () => (
    <InputList label="Numbers" dataSource={DATA_SOURCE} />
  ))
  .addWithJSX('itemTemplate', () => (
    <InputList label="Numbers" itemTemplate={item} value={VALUE_COMPLEX} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <InputList label="Numbers" onChange={action('InputList.onChange()')} title="Press me" value={VALUE} />
  ))
  .addWithJSX('style', () => (
    <InputList label="Numbers" style={STYLE} value={VALUE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <InputListHOC
      dataSource={array('dataSource', DATA_SOURCE)}
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', null)}
      label={text('label', "numbers")}
      value={array('value', VALUE)}
      style={object('style', STYLE)}
    />
  ))

