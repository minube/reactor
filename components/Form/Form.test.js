import React from 'react';
import renderer from 'react-test-renderer';

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
  mail: { keyboard: 'url', style: 'inline2' },
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
  }
};

const DATA = {
  username: 'soyjavi',
  mail: 'hello@soyjavi.com',
  social: {
    twitter: 'soyjavi',
    facebook: '😅',
  }
};

const STORY_STYLE = { maxWidth: '50%', maxHeight: '80%' };
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 20 };

const EVENT = () => {};

describe('<Form>', () => {
  it('renders', () => {
    const tree = renderer.create(<Form attributes={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {attributes}', () => {
    const tree = renderer.create(<Form attributes={ATTRIBUTES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {data}', () => {
    const tree = renderer.create(<Form attributes={ATTRIBUTES} data={DATA} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Form title="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Form style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onChange}', () => {
    const tree = renderer.create(<Form onChange={EVENT} />).toJSON();
    expect(tree).toMatchSnapshot();
    // @TODO: Test <Form /> {onClose}
  });

  it('when {onValid}', () => {
    const tree = renderer.create(<Form onValid={EVENT} />).toJSON();
    expect(tree).toMatchSnapshot();
    // @TODO: Test <Form /> {onClose}
  });
});

