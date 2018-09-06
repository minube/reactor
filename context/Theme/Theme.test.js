import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ConsumerTheme, ProviderTheme } from './Theme';

global.fetch = () => {};

describe('<ProviderTheme>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ProviderTheme />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

