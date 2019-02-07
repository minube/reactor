import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { color, text, boolean, object, number, select } from '@storybook/addon-knobs/react';

import Form from './Form';

const ATTRIBUTES = {
  username: { required: true, defaultValue: 'soyjavi', icon: 'twitter' },
  role: {
    required: true,
    type: 'select',
    defaultValue: 'backend',
    dataSource: ['frontend', 'backend', 'fullstack'],
    style: 'inline2',
  },
  mail: {
    keyboard: 'email-address',
    placeholder: 'Your email...',
    required: true,
    style: 'inline2',
    hint: 'we will not send you spam.'
  },
  phone: {
    keyboard: 'phone-pad',
    placeholder: '000 000 000',
    style: 'inline2',
  },
  phoneCountryCode: {
    countryCode: true,
    keyboard: 'phone-pad',
    placeholder: '+00 000 000 000',
    hint: 'Using property countryCode',
    style: 'inline2',
  },
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
  terms: { type: 'option', label: 'ACCEPT, terms & conditions', rounded: false },
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
const STYLE = { backgroundColor: 'rgba(255,255,255,1)', padding: 20 };

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
  .add('⚡ onChange', () => (
    <FormHOC attributes={ATTRIBUTES} onChange={action('Form.onChange()')} style={STORY_STYLE}  />
  ))
  .add('⚡ onValid', () => (
    <FormHOC attributes={ATTRIBUTES} onValid={action('Form.onValid()')} style={STORY_STYLE}  />
  ))
  .add('style', () => (
    <FormHOC attributes={ATTRIBUTES} style={{...STYLE, ...STORY_STYLE }} />
  ))
  .add('🏀 Playground', () => (
    <FormHOC
      attributes={object('attributes', ATTRIBUTES)}
      color={color('color', undefined)}
      value={object('value', VALUE)}
      title={text('title', null)}
      style={object('style', {...STYLE, ...STORY_STYLE})}
    />
  ))

