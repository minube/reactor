import React from 'react';
import ReactDOM from 'react-dom';
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

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LayoutView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

