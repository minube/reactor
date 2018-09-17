import React from 'react';
import renderer from 'react-test-renderer';

import Share from './Share';

const LOREM_Share = 'https://api.adorable.io/Shares/128/8';
const STYLE = { borderRadius: 5, width: 128, height: 128 };
const LOREM_URI = 'http://soyjavi.com';

describe('<Share>', () => {
  it('renders', () => {
    const tree = renderer.create(<Share uri={LOREM_URI} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<share uri={LOREM_URI} title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<share uri={LOREM_URI} caption="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<share uri={LOREM_URI} color="red" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onCancel}', () => {
    // @TODO: Test <Share /> {onCancel}
  });

  it('when {onOption}', () => {
    // @TODO: Test <Share /> {onOption}
  });

  it('when {onPress}', () => {
    // @TODO: Test <Share /> {onPress}
  });
});

