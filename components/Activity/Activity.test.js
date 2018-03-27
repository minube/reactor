import React from 'react';
import ReactDOM from 'react-dom';
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

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Activity />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

