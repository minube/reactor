import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import PictureCard from './PictureCard';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

describe('<PictureCard>', () => {
  it('renders', () => {
    const tree = renderer.create(<PictureCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {image}', () => {
    const tree = renderer.create(<PictureCard image={LIPSUM_IMAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {backgroundColor}', () => {
    const tree = renderer.create(<PictureCard backgroundColor={THEME.COLOR.PRIMARY} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<PictureCard caption="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<PictureCard title="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {small}', () => {
    const tree = renderer.create(<PictureCard small />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {portrait}', () => {
    const tree = renderer.create(<PictureCard portrait />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <PictureCard /> {onPress}
  });

  it('when {onLoad}', () => {
    // @TODO: Test <PictureCard /> {onLoad}
  });

  it('when {style}', () => {
    const tree = renderer.create(<PictureCard style={{ backgroundColor: 'orange', opacity: 0.75 }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

