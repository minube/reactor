import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, object, number, select } from '@storybook/addon-knobs/react';

import Form from './Form';

const ATTRIBUTES = {
  username: { required: true },
  role: {
    required: true,
    type: 'select',
    defaultValue: 'fullstack',
    dataSource: ['frontend', 'backend', 'fullstack'],
    style: 'inline2',
  },
  mail: { keyboard: 'url', placeholder: 'Your email...', style: 'inline2' },
  bio: { lines: 4 },
  avatar: { type: 'image', defaultValue: 'http://soyjavi.com/assets/images/soyjavi.jpg' },
  isPublic: { type: 'bool' },
  social: {
    title: 'Social Networks',
    attributes: {
      twitter: { style: 'inline3' },
      facebook: { style: 'inline3' },
      github: { style: 'inline3', required: true },
    }
  },
  languages: { type: 'list' },
};

const VALUE = {
  username: 'soyjavi',
  social: {
    twitter: 'soyjavi',
    facebook: '😅',
  },
  languages: [ 'JavaScript', 'CoffeeScript', 'C++']
};

const STORY_STYLE = { minWidth: 320, maxWidth: '50%', maxHeight: '80%' };
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 20 };

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
    return <Form {...props} value={value} onChange={_onChange} />
  }
}

storiesOf('☑️ Form', module)
  .addWithJSX('default', () => (
    <Form attributes={{}} />
  ))
  .addWithJSX('attributes', () => (
    <FormHOC attributes={ATTRIBUTES} style={STORY_STYLE} />
  ))
  .addWithJSX('value', () => (
    <FormHOC attributes={ATTRIBUTES} value={VALUE} style={STORY_STYLE} />
  ))
  .addWithJSX('title', () => (
    <FormHOC attributes={ATTRIBUTES} title="Your contact" style={STORY_STYLE} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <FormHOC attributes={ATTRIBUTES} onChange={action('Form.onChange()')} style={STORY_STYLE}  />
  ))
  .addWithJSX('⚡ onValid', () => (
    <FormHOC attributes={ATTRIBUTES} onValid={action('Form.onValid()')} style={STORY_STYLE}  />
  ))
  .addWithJSX('style', () => (
    <FormHOC attributes={ATTRIBUTES} style={{...STYLE, ...STORY_STYLE }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <FormHOC
      attributes={object('attributes', ATTRIBUTES)}
      value={object('value', VALUE)}
      title={text('title', null)}
      style={object('style', {...STYLE, ...STORY_STYLE})}
    />
  ))

