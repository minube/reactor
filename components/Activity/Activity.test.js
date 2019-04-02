import React from 'react';
import renderer from 'react-test-renderer';

import Activity from './Activity';
import MOCKS from './Activity.mocks';

describe('<Activity>', () => {
  it('renders', () => {
    const tree = renderer.create(<Activity />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Activity color={MOCKS.COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Activity size={MOCKS.SIZE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Activity style={MOCKS.STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
