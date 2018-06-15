import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import BoardingPass from './BoardingPass';

const CHILDREN = <Text>Hello World</Text>;
const LOADING = <Text>Loading...</Text>;

describe('<BoardingPass>', () => {
  it('renders', () => {
    const tree = renderer.create(<BoardingPass />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<BoardingPass>{CHILDREN}</BoardingPass>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {loading}', () => {
    const tree = renderer.create(<BoardingPass loading={LOADING}>{CHILDREN}</BoardingPass>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BoardingPass />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
