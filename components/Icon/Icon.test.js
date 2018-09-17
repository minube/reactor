import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Icon from './Icon';

const dataSource = [
  { caption: 'Spain', href: '/' },
  { caption: 'Basque Country', href: '/' },
  { caption: 'Bilbao', href: '/' },
];

const ICON_VALUE = 'close';

describe('<Icon>', () => {
  it('renders', () => {
    const tree = renderer.create(<Icon value={ICON_VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value} as uri', () => {
    const tree = renderer.create(<Icon value="https://api.adorable.io/avatars/48/8" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color} (only Native)', () => {
    const tree = renderer.create(<Icon value={ICON_VALUE} color={THEME.COLOR.ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {invert} (only Web)', () => {
    const tree = renderer.create(<Icon value={ICON_VALUE} invert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Icon value={ICON_VALUE} size={48} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Icon value={ICON_VALUE} style={{ backgroundColor: THEME.COLOR.SECONDARY }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

