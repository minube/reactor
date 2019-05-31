import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  text, boolean, number, object, select,
} from '@storybook/addon-knobs/react';

import InputDate from './InputDate';
import {
  ERROR, HINT, LABEL, STYLE, TEMPLATE, VALUE, VALUE_RANGE
} from './InputDate.mocks';

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

    this.setState({ value });
    if (onChange) onChange(value);
  }

  render() {
    const { _onChange, props, state: { value } } = this;

    return <InputDate {...props} value={value} onChange={_onChange} />;
  }
}

storiesOf('✅ InputDate', module)
  .add('default', () => (
    <HOC />
  ))
  .add('disabled', () => (
    <HOC disabled />
  ))
  .add('error', () => (
    <HOC error={ERROR} />
  ))
  .add('hint', () => (
    <HOC hint={HINT} />
  ))
  .add('label', () => (
    <HOC label={LABEL} />
  ))
  .add('value', () => (
    <HOC value={VALUE} />
  ))
  .add('value & range', () => (
    <HOC range value={VALUE_RANGE} />
  ))
  .add('⚡ onChange', () => (
    <HOC onChange={action('InputDate.onChange()')} title="Press me" />
  ))
  .add('style', () => (
    <HOC style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <HOC
      disabled={boolean('disabled', false)}
      error={text('error', null)}
      hint={text('hint', HINT)}
      label={text('label', LABEL)}
      value={object('value', VALUE_RANGE)}
      range={boolean('range', true)}
      style={object('style', STYLE)}
    />
  ));
