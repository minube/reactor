import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ConsumerL10N, ProviderL10N } from './L10N';

global.fetch = () => {};

describe('<ProviderL10N>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ProviderL10N />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
