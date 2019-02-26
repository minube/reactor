import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Text from './Text';

const LOREM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

describe('<Text>', () => {
  it('renders', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:0}', () => {
    const tree = renderer.create(<Text headline level={0}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:1}', () => {
    const tree = renderer.create(<Text headline level={1}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:2}', () => {
    const tree = renderer.create(<Text headline level={2}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:3}', () => {
    const tree = renderer.create(<Text headline level={3}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:4}', () => {
    const tree = renderer.create(<Text headline level={4}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:5}', () => {
    const tree = renderer.create(<Text headline level={5}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline level:6}', () => {
    const tree = renderer.create(<Text headline level={6}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it('when {subtitle level:1}', () => {
    const tree = renderer.create(<Text subtitle level={1}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {subtitle level:2}', () => {
    const tree = renderer.create(<Text subtitle level={2}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {subtitle level:3}', () => {
    const tree = renderer.create(<Text subtitle level={3}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {body level:1}', () => {
    const tree = renderer.create(<Text body level={1}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {body level:2}', () => {
    const tree = renderer.create(<Text body level={2}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {body level:3}', () => {
    const tree = renderer.create(<Text body level={3}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it('when {caption level:1}', () => {
    const tree = renderer.create(<Text caption level={1}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption level:2}', () => {
    const tree = renderer.create(<Text caption level={2}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lighten}', () => {
    const tree = renderer.create(<Text lighten>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Text color={THEME.COLOR.ERROR}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {numberOfLines}', () => {
    const tree = renderer.create(<Text numberOfLines={2}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Text style={{ color: 'orange' }}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

