import React from 'react';
import renderer from 'react-test-renderer';

import InputPicker from './InputPicker';

describe('<InputPicker>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputPicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputPicker disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputPicker error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputPicker hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputPicker label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputPicker value="three" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputPicker style={{ backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

