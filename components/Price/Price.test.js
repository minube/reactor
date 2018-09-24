import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Price from './Price';

describe('<Price>', () => {
  it('renders', () => {
    const tree = renderer.create(<Price />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<Price caption="from" />).toJSON();
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
    const tree = renderer.create(<Price style={{ color: 'orange' }} value={19.1234} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

