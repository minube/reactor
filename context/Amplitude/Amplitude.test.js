import React from 'react';
import ReactDOM from 'react-dom';
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

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProviderAmplitude />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

