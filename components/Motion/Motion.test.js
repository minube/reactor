import React from 'react';
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
    const tree = renderer.create(<Motion property="left" type="timing" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {useNativeDriver}', () => {
    const tree = renderer.create(<Motion property="left" useNativeDriver />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {delay}', () => {
    const tree = renderer.create(<Motion property="left" delay={1000} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Motion property="left" disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Motion property="left" value={128} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Motion property="left"><View /></Motion>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

