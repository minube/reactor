import React from 'react';
import renderer from 'react-test-renderer';
import InputSearcher from './InputSearcher';

const VALUE = 'Madrid';
const DATA = [
  {name: 'Madrid', id: 23},
  {name: 'Madrid Snowzone', id: 12},
];
const FUNC = () => {};
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

describe('<InputSearcher>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputSearcher />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputSearcher disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dataSource}', () => {
    const tree = renderer.create(<InputSearcher dataSource={DATA} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputSearcher hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputSearcher label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputSearcher value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onChange}', () => {
    const tree = renderer.create(<InputSearcher onChange={FUNC} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClickItem}', () => {
    const tree = renderer.create(<InputSearcher onClickItem={FUNC} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {placeholder}', () => {
    const tree = renderer.create(<InputSearcher placeholder={"Hello World"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputSearcher style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
