import React from 'react';
import renderer from 'react-test-renderer';

import LayoutView from './Layout';

describe('<LayoutView>', () => {
  it('renders', () => {
    const tree = renderer.create(<LayoutView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onLayout}', () => {
    // @TODO: Test <LayoutView /> {onLayout}
  });
});

