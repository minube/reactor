import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Icon from './Icon';
import MOCKS from './Icon.mocks';

describe('<Icon>', () => {
  it('renders', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value} (as uri)', () => {
    const tree = renderer.create(<Icon value="https://api.adorable.io/avatars/48/8" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color} (only Native)', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} color={MOCKS.COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {invert} (only Web)', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} invert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} size={48} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} style={MOCKS.STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
