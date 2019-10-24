import React from 'react';
import renderer from 'react-test-renderer';

import DialogError from './DialogError';
import MOCKS from '../Icon/Icon.mocks';

const TEXT = 'You must complete all fields'

describe('<DialogError>', () => {
  it('renders when {text}', () => {
    const tree = renderer.create(<DialogError title={TEXT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<DialogError title={TEXT} icon={MOCKS.VALUE_NAV.RIGHT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
