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
  isPublic: { type: 'bool' },
  social: {
    title: 'Social Networks',
    attributes: {
      twitter: { style: 'inline3' },
      facebook: { style: 'inline3' },
      github: { style: 'inline3', required: true },
    }
  }
};

const DATA = {
  username: 'soyjavi',
  social: {
    twitter: 'soyjavi',
    facebook: '😅',
  }
};

const STORY_STYLE = { minWidth: 320, maxWidth: '50%', maxHeight: '80%' };
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 20 };

class FormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  _onChange = (data) => {
    const { props: { onChange } } = this;
    this.setState({ data });
    if (onChange) onChange(data);
  }

  render() {
    const { _onChange, props, state: { data = {} } } = this;
    return <Form {...props} data={data} onChange={_onChange} />
  }
}

storiesOf('🛠 Form', module)
  .addWithJSX('default', () => (
    <Form />
  ))
  .addWithJSX('attributes', () => (
    <FormHOC attributes={ATTRIBUTES} style={STORY_STYLE} />
  ))
  .addWithJSX('data', () => (
    <FormHOC attributes={ATTRIBUTES} data={DATA} style={STORY_STYLE} />
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
      data={object('data', DATA)}
      title={text('title', null)}
      style={object('style', {...STYLE, ...STORY_STYLE})}
    />
  ))

