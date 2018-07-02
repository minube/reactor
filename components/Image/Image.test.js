import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Image from './Image';

const dataSource = [
  { caption: 'Spain', href: '/' },
  { caption: 'Basque Country', href: '/' },
  { caption: 'Bilbao', href: '/' },
];

const IMAGE_PLACEHOLDER = 'https://picsum.photos/320/200/?random';
const IMAGE_AKAMAI = 'https://imgs-akamai.mnstatic.com//tools//genericimages//fc5b42a5baceed399c3bb913406693fd3d4d64ef8bb69457697c90cb71b2c4dd.jpg';

describe('<Image>', () => {
  it('renders', () => {
    const tree = renderer.create(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source}', () => {
    const tree = renderer.create(<Image source={{ uri: IMAGE_PLACEHOLDER }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {responsive}', () => {
    const tree = renderer.create(<Image responsive source={{ uri: IMAGE_AKAMAI }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {ratio}', () => {
    const tree = renderer.create(<Image ratio={10} responsive source={{ uri: IMAGE_AKAMAI }} />).toJSON();
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
});

