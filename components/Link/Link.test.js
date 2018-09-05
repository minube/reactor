import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Link from './Link';

const LOREM_HREF = 'http://minube.com';

describe('<Link>', () => {
  it('renders', () => {
    const tree = renderer.create(<Link href={LOREM_HREF} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const style = { fontSize: THEME.FONT.SIZE.LARGE, fontWeight: THEME.FONT.WEIGHT.BOLD };
    const tree = renderer.create(<Link href={LOREM_HREF} visible style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleHover}', () => {
    const styleHover = { fontSize: THEME.FONT.SIZE.LARGE, fontWeight: THEME.FONT.WEIGHT.BOLD };
    const tree = renderer.create(<Link href={LOREM_HREF} visible styleHover={styleHover} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

