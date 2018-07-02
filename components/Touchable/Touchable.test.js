import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Touchable from './Touchable';

describe('<Touchable>', () => {
  it('renders', () => {
    const tree = renderer.create(<Touchable><View /></Touchable>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

