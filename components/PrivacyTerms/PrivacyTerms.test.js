import React from 'react';
import renderer from 'react-test-renderer';

import PrivacyTerms from './PrivacyTerms';

const style = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  padding: 10,
};
const LABEL = 'Lorem Ipsum...';

describe('<PrivacyTerms>', () => {
  it('renders', () => {
    const tree = renderer.create(<PrivacyTerms />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('label', () => {
    const tree = renderer.create(<PrivacyTerms label={LABEL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('value', () => {
    const tree = renderer.create(<PrivacyTerms value />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('rounded (false)', () => {
    const tree = renderer.create(<PrivacyTerms rounded={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('inherity:style', () => {
    const tree = renderer.create(<PrivacyTerms style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onChange', () => {
    // @TODO: Test <PrivacyTerms /> {onChange}
  });
});
