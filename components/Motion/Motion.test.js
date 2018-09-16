import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Motion from './Motion';

const TIMELINE = [
  { property: 'opacity', value: 0.75 },
  { property: 'scale', value: 0.5 },
  { property: 'left', value: 128 },
];

describe('<Motion>', () => {
  it('renders', () => {
    const tree = renderer.create(<Motion />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Motion property="left"><View /></Motion>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {timeline}', () => {
    const tree = renderer.create(<Motion timeline={TIMELINE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {delay}', () => {
    const tree = renderer.create(<Motion timeline={TIMELINE} delay={1000} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Motion timeline={TIMELINE} disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {duration}', () => {
    const tree = renderer.create(<Motion timeline={TIMELINE} duration={1000} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {preset}', () => {
    const tree = renderer.create(<Motion preset="fade" visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {type}', () => {
    const tree = renderer.create(<Motion timeline={TIMELINE} type="timing" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {useNativeDriver}', () => {
    const tree = renderer.create(<Motion timeline={TIMELINE} useNativeDriver />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

