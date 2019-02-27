import React from 'react';
import renderer from 'react-test-renderer';

import Link from './Link';

const LOREM_HREF = 'http://minube.com';

describe('<Link>', () => {
  it('renders', () => {
    const tree = renderer.create(<Link href={LOREM_HREF} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const style = { fontSize: 20, fontWeight: '700' };
    const tree = renderer.create(<Link href={LOREM_HREF} visible style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleHover}', () => {
    const styleHover = { fontSize: 20, fontWeight: '700' };
    const tree = renderer.create(<Link href={LOREM_HREF} visible styleHover={styleHover} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
