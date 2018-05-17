import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Input from './Input';

describe('<Input>', () => {
  it('renders', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

