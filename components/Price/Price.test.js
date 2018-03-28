import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Price from './Price';

describe('<Price>', () => {
  it('renders', () => {
    const tree = renderer.create(<Price />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Price value={19.95} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {fixed}', () => {
    const tree = renderer.create(<Price fixed={2} value={19.1234} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {symbol} (left)', () => {
    const tree = renderer.create(<Price value={4} symbol="$" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {symbol} (right)', () => {
    const tree = renderer.create(<Price value={4} symbol="eur" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Price style={{ fontSize: THEME.FONT.SIZE.SMALL, color: 'orange' }} value={19.1234} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Price />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

