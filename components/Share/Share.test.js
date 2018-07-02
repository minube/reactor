import React from 'react';
import renderer from 'react-test-renderer';

import Share from './Share';

const LOREM_Share = 'https://api.adorable.io/Shares/128/8';
const STYLE = { borderRadius: 5, width: 128, height: 128 };

describe('<Share>', () => {
  it('renders', () => {
    const tree = renderer.create(<Share />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<share title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<share caption="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {accentColor}', () => {
    const tree = renderer.create(<share accentColor="red" />).toJSON();
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

