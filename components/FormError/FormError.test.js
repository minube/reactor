import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import FormError from './FormError';
import MOCKS from '../Icon/Icon.mocks';

const TEXT = 'You must complete all fields'

describe('<FormError>', () => {
  it('renders when {text}', () => {
    const tree = renderer.create(<FormError title={TEXT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<FormError title={TEXT} icon={MOCKS.VALUE_NAV.RIGHT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
