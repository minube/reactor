import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Price from './Price';

const STYLE = { fontWeight: "800", fontSize: 32, color: 'green' }
const VALUE = 19.1234;

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
    const tree = renderer.create(<Price value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {fixed}', () => {
    const tree = renderer.create(<Price fixed={2} value={VALUE} />).toJSON();
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

  it('inject <Text> properties', () => {
    const tree = renderer.create(<Price headline={false} subtitle level={2} value={4} symbol="eur" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Price style={STYLE} value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

