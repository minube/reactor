import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Link from './Link';

describe('<Link>', () => {
  it('renders', () => {
    const tree = renderer.create(<Link />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {href}', () => {
    const tree = renderer.create(<Link href="http://minube.com" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const style = { fontSize: THEME.FONT.SIZE.LARGE, fontWeight: THEME.FONT.WEIGHT.BOLD };
    const tree = renderer.create(<Link visible style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleHover}', () => {
    const styleHover = { fontSize: THEME.FONT.SIZE.LARGE, fontWeight: THEME.FONT.WEIGHT.BOLD };
    const tree = renderer.create(<Link visible styleHover={styleHover} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

