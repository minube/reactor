import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ResponsiveView from './ResponsiveView';

describe('<ResponsiveView>', () => {
  it('renders', () => {
    const tree = renderer.create(<ResponsiveView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onLayout}', () => {
    // @TODO: Test <ResponsiveView /> {onLayout}
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResponsiveView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

