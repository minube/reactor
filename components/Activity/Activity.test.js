import React from 'react';
import renderer from 'react-test-renderer';

import Activity from './Activity';

describe('<Activity>', () => {
  it('renders', () => {
    const tree = renderer.create(<Activity />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Activity color="#f00" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Activity size="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
