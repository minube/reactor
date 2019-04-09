import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  color, text, boolean, object, number, select,
} from '@storybook/addon-knobs/react';

import Form from './Form';
import { ATTRIBUTES, VALUE, STYLE } from './Form.mocks';

const STORY_STYLE = { minWidth: 320, maxWidth: '50%', maxHeight: '80%' };

class FormHOC extends Component {
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
    return <Form {...props} value={value} onChange={_onChange} />;
  }
}

storiesOf('☑️ Form', module)
  .add('default', () => (
    <Form attributes={{}} />
  ))
  .add('attributes', () => (
    <FormHOC attributes={ATTRIBUTES} style={STORY_STYLE} />
  ))
  .add('color', () => (
    <FormHOC attributes={ATTRIBUTES} color="green" style={STORY_STYLE} />
  ))
  .add('value', () => (
    <FormHOC attributes={ATTRIBUTES} value={VALUE} style={STORY_STYLE} />
  ))
  .add('title', () => (
    <FormHOC attributes={ATTRIBUTES} title="Your contact" style={STORY_STYLE} />
  ))
  .add('validate', () => (
    <FormHOC attributes={ATTRIBUTES} validate style={STORY_STYLE} />
  ))
  .add('⚡ onChange', () => (
    <FormHOC attributes={ATTRIBUTES} onChange={action('Form.onChange()')} style={STORY_STYLE} />
  ))
  .add('⚡ onValid', () => (
    <FormHOC attributes={ATTRIBUTES} onValid={action('Form.onValid()')} style={STORY_STYLE} />
  ))
  .add('style', () => (
    <FormHOC attributes={ATTRIBUTES} style={{ ...STYLE, ...STORY_STYLE }} />
  ))
  .add('🏀 Playground', () => (
    <FormHOC
      attributes={object('attributes', ATTRIBUTES)}
      color={color('color', undefined)}
      value={object('value', VALUE)}
      title={text('title', null)}
      style={object('style', { ...STYLE, ...STORY_STYLE })}
    />
  ));
