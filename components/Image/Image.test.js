import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Image from './Image';

const dataSource = [
  { caption: 'Spain', href: '/' },
  { caption: 'Basque Country', href: '/' },
  { caption: 'Bilbao', href: '/' },
];

describe('<Image>', () => {
  it('renders', () => {
    const tree = renderer.create(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Image value="menu" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value} as uri', () => {
    const tree = renderer.create(<Image value="https://api.adorable.io/avatars/48/8" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color} (only Native)', () => {
    const tree = renderer.create(<Image color={THEME.COLOR.ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {invert} (only Web)', () => {
    const tree = renderer.create(<Image invert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Image size={48} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Image style={{ backgroundColor: THEME.COLOR.ACCENT }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

