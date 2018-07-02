import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ConsumerAmplitude, ProviderAmplitude } from './Amplitude';

global.fetch = () => {};

describe('<ProviderAmplitude>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ProviderAmplitude />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('dispatch _logEvent', () => {
    const renderer = TestRenderer.create(<ProviderAmplitude  />);

    renderer.getInstance()._logEvent('hello');
  });
});

