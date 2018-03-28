import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Text from './Text';

describe('<Text>', () => {
  it('renders', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {tiny}', () => {
    const tree = renderer.create(<Text tiny>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {small}', () => {
    const tree = renderer.create(<Text small>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {large}', () => {
    const tree = renderer.create(<Text large>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Text title>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lighter}', () => {
    const tree = renderer.create(<Text lighter>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {semibold}', () => {
    const tree = renderer.create(<Text semibold>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {bold}', () => {
    const tree = renderer.create(<Text bold>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {primary}', () => {
    const tree = renderer.create(<Text primary>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {accent}', () => {
    const tree = renderer.create(<Text accent>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lighten}', () => {
    const tree = renderer.create(<Text lighten>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('when {color}', () => {
    const tree = renderer.create(<Text color={THEME.COLOR.ERROR}>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Text style={{ fontSize: THEME.FONT.SIZE.LARGE, color: 'orange' }}>Hello World</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

