import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Heading from './Heading';

const { COLOR, SPACE } = THEME;
const BREADCRUMBS = [
  { caption: 'Turismo', href: '/' },
  { caption: 'Gran Bretaña', href: '/' },
  { caption: 'Inglaterra', href: '/' },
  { caption: 'Londres', href: '/' },
];

const CONTRIBUTORS = {
  total: 128,
  label: 'colaborators',
  preview: [
    { id: 8, image: 'https://api.adorable.io/avatars/48/8' },
    { id: 16, image: 'https://api.adorable.io/avatars/48/16' },
    { id: 32, image: 'https://api.adorable.io/avatars/48/32' },
  ],
};

const RATING = { caption: 'valoraciones', count: 12, value: 4.5 };
const LOREM_TITLE = 'Hello World';

describe('<Heading>', () => {
  it('renders', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {rating}', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} rating={RATING} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {breadcrumbs}', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} breadcrumbs={BREADCRUMBS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {contributors}', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} contributors={CONTRIBUTORS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} color={COLOR.SECONDARY} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {column}', () => {
    const tree = renderer.create(<Heading title={LOREM_TITLE} column rating={RATING} contributors={CONTRIBUTORS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const style = {
      padding: SPACE.MEDIUM,
      backgroundColor: 'rgba(0,0,0,0.25)',
    };
    const tree = renderer.create(<Heading title={LOREM_TITLE} style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
