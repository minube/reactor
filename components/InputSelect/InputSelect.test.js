import React from 'react';
import renderer from 'react-test-renderer';

import InputSelect from './InputSelect';

describe('<InputSelect>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputSelect disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputSelect error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputSelect hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputSelect label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputSelect value="three" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputSelect style={{ backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

