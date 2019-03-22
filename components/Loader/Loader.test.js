import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './Loader';

const COLOR = 'red';
const LOADING = 'Loading';

jest.useFakeTimers()

describe('<Loader>', () => {
  it('renders', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Loader color={COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {large}', () => {
    const tree = renderer.create(<Loader large />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {text}', () => {
    const tree = renderer.create(<Loader text={LOADING} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
