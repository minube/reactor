import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Motion from './Motion';

describe('<Motion>', () => {
  it('renders', () => {
    const tree = renderer.create(<Motion />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {property}', () => {
    const tree = renderer.create(<Motion property="left" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {type}', () => {
    const tree = renderer.create(<Motion type="timming" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {useNativeDriver}', () => {
    const tree = renderer.create(<Motion useNativeDriver />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {delay}', () => {
    const tree = renderer.create(<Motion delay={1000} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Motion property="left" value={128} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Motion><View /></Motion>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Motion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

