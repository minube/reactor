import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import InputSelect from './InputSelect';

const DATASOURCE = [
  { title: 'one', caption: 'Example of caption' },
  { title: 'two', caption: 'Example of caption' },
  { title: 'three', caption: 'Example of caption' },
  { title: 'four', caption: 'Example of caption' },
  { title: 'five', caption: 'Example of caption' },
  { title: 'six', caption: 'Example of caption' },
  { title: 'seven', caption: 'Example of caption' },
  { title: 'height', caption: 'Example of caption' },
  { title: 'nine', caption: 'Example of caption' },
  { title: 'ten', caption: 'Example of caption' },
];
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 };
const LABEL = 'Username';
const HINT = 'Optional field';

class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps({ value }) {
    this.setState({ value });
  }

  _onChange = (value) => {
    const { props: { onChange } } = this;
    ;
    this.setState({ value });
    if (onChange) onChange(value);
  }

  render() {
    const { _onChange, props, state: { value } } = this;

    return <InputSelect {...props} value={value} onChange={_onChange} />
  }
}

storiesOf('✅ InputSelect', module)
  .add('default', () => (
    <HOC />
  ))
  .add('datasource', () => (
    <HOC datasource dataSource={DATASOURCE} />
  ))
  .add('disabled', () => (
    <HOC disabled dataSource={DATASOURCE} />
  ))
  .add('error', () => (
    <HOC error="Required field" dataSource={DATASOURCE} />
  ))
  .add('hint', () => (
    <HOC hint={HINT} dataSource={DATASOURCE} />
  ))
  .add('label', () => (
    <HOC label={LABEL} dataSource={DATASOURCE} />
  ))
  .add('value', () => (
    <HOC value={3} dataSource={DATASOURCE} />
  ))
  .add('⚡ onChange', () => (
    <HOC onChange={action('InputSelect.onChange()')} title="Press me" dataSource={DATASOURCE} />
  ))
  .add('style', () => (
    <HOC style={STYLE} dataSource={DATASOURCE} />
  ))
  .add('🏀 Playground', () => (
    <HOC
      dataSource={object('dataSource', DATASOURCE)}
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', HINT)}
      label={text('label', LABEL)}
      value={number('value', 3)}
      style={object('style', STYLE)}
    />
  ))

