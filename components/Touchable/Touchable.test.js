import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Touchable from './Touchable';

describe('<Touchable>', () => {
  it('renders', () => {
    const tree = renderer.create(<Touchable><View /></Touchable>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Touchable><View /></Touchable>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

