import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Heading from './Heading';

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

describe('<Heading>', () => {
  it('renders', () => {
    const tree = renderer.create(<Heading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Heading title="Hello" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {rating}', () => {
    const tree = renderer.create(<Heading title="Hello" rating={RATING} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {breadcrumbs}', () => {
    const tree = renderer.create(<Heading title="Hello" breadcrumbs={BREADCRUMBS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {contributors}', () => {
    const tree = renderer.create(<Heading title="Hello" contributors={CONTRIBUTORS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Heading title="Hello" color={THEME.COLOR.ACCENT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {column}', () => {
    const tree = renderer.create(<Heading title="Hello" column rating={RATING} contributors={CONTRIBUTORS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const style = {
      padding: THEME.OFFSET,
      backgroundColor: 'rgba(0,0,0,0.25)',
    };
    const tree = renderer.create(<Heading title="Hello" style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

