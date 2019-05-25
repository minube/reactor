import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Rating from './Rating';

describe('<Rating>', () => {
  it('renders', () => {
    const tree = renderer.create(<Rating />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Rating value={3.5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {showValue}', () => {
    const tree = renderer.create(<Rating value={3.5} showValue />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {count}', () => {
    const tree = renderer.create(<Rating count={32} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<Rating caption="valoraciones" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Rating value={3.5} color={THEME.COLOR.ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {textColor}', () => {
    const tree = renderer.create(<Rating value={3.5} textColor={THEME.COLOR.ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Rating value={3.5} style={{ fontSize: 20, lineHeight: 20, color: 'orange' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
