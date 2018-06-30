import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Input from './Input';

describe('<Input>', () => {
  it('renders', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Input disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<Input error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<Input hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {keyboard}', () => {
    const tree = renderer.create(<Input keyboard="numeric" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<Input label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lines}', () => {
    const tree = renderer.create(<Input lines={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lines}', () => {
    const tree = renderer.create(<Input style={{ backgroundColor: 'orange' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

