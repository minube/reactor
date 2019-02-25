import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  text, boolean, number, object, select,
} from '@storybook/addon-knobs/react';

import InputSelect from './InputSelect';
import {
  DATASOURCE, DATASOURCE_STRING, ERROR, HINT, LABEL, STYLE, TEMPLATE,
} from './InputSelect.mocks';

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

    return <InputSelect {...props} value={value} onChange={_onChange} />;
  }
}

storiesOf('✅ InputSelect', module)
  .add('default', () => (
    <HOC />
  ))
  .add('dataSource', () => (
    <HOC dataSource={DATASOURCE} />
  ))
  .add('dataSource (string)', () => (
    <HOC dataSource={DATASOURCE_STRING} />
  ))
  .add('disabled', () => (
    <HOC disabled dataSource={DATASOURCE} />
  ))
  .add('error', () => (
    <HOC error={ERROR} dataSource={DATASOURCE} />
  ))
  .add('hint', () => (
    <HOC hint={HINT} dataSource={DATASOURCE} />
  ))
  .add('label', () => (
    <HOC label={LABEL} dataSource={DATASOURCE} />
  ))
  .add('itemTemplate', () => (
    <HOC label={LABEL} dataSource={DATASOURCE} ItemTemplate={TEMPLATE} />
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
  ));
