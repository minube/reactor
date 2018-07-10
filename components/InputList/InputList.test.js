import React from 'react';
import renderer from 'react-test-renderer';

import InputList from './InputList';

const VALUE = ['one', 'two', 'three', 'four', 'five'];
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

describe('<InputList>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputList disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputList error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputList hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputList label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputList value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputList style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

