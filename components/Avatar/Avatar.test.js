import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Avatar from './Avatar';

const LOREM_AVATAR = 'https://api.adorable.io/avatars/128/8';
const STYLE = { borderRadius: 5, width: 128, height: 128 };

describe('<Avatar>', () => {
  it('renders', () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {image}', () => {
    const tree = renderer.create(<Avatar image={LOREM_AVATAR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {small}', () => {
    const tree = renderer.create(<Avatar small />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {large}', () => {
    const tree = renderer.create(<Avatar large />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Avatar style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

