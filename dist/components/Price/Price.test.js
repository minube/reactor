import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Price from './Price';

const STYLE = { fontWeight: "800", fontSize: 32, color: 'green' }
const PROPS = { value: 6995.123456 };

describe('<Price>', () => {
  it('renders', () => {
    const tree = renderer.create(<Price />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Price {...PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {locale} (es-ES)', () => {
    const tree = renderer.create(<Price {...PROPS} locale="es-ES" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {fixed} (4)', () => {
    const tree = renderer.create(<Price {...PROPS} fixed={4}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {fixed} (0)', () => {
    const tree = renderer.create(<Price {...PROPS} fixed={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {symbol} (left)', () => {
    const tree = renderer.create(<Price {...PROPS} symbol="$" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {symbol} (right)', () => {
    const tree = renderer.create(<Price {...PROPS} symbol="eur" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Price {...PROPS} title="from" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('inject <Text> properties', () => {
    const tree = renderer.create(<Price {...PROPS} headline={false} subtitle level={2}  symbol="eur" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Price {...PROPS} style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

